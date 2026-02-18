import prisma from "../db.js"
 

// Interface as per your instructions
export interface IDashboardStats {
  totalLibraries: number;
  activeBookings: number;
  todayRevenue: number;
}

export const getOwnerDashboardStats = async (ownerId: string): Promise<IDashboardStats> => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  // Saari queries ek saath execute hongi
  const [libraryCount, activeBookingsCount, revenueAggregation] = await Promise.all([
    // 1. Owner ki total kitni libraries hain
    prisma.library.count({
      where: { ownerId }
    }),

    // 2. Un libraries mein kitni active bookings hain
    prisma.booking.count({
      where: {
        library: { ownerId },
        status: "active"
      }
    }),

    // 3. Aaj ka total paisa (Sum of amountPaid)
    prisma.booking.aggregate({
      _sum: { amountPaid: true },
      where: {
        library: { ownerId },
        createdAt: { gte: startOfToday }
      }
    })
  ]);

  return {
    totalLibraries: libraryCount,
    activeBookings: activeBookingsCount,
    // Decimal ko number mein badalna padta hai
    todayRevenue: Number(revenueAggregation._sum.amountPaid) || 0
  };
};