import { Request, Response } from "express";
import * as statsService from "../services/statsService.js";

export const getStats = async (req: Request, res: Response): Promise<void> => {
  try {
    // 1. Middleware 'userId' set karta hai, 'user.id' nahi
    const ownerId = (req as any).userId; 

    // 2. Extra check taaki crash na ho agar userId na mile
    if (!ownerId) {
       res.status(401).json({ success: false, message: "User ID not found in request" });
       return;
    }

    console.log("Fetching stats for Owner ID:", ownerId); // Debugging ke liye

    const stats = await statsService.getOwnerDashboardStats(ownerId);

    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error("Dashboard Stats Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};