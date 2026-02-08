import { PrismaClient } from "@prisma/client/extension";

const globalforPrisma = global as unknown as {pirsma: PrismaClient};

export const prisma = globalforPrisma.pirsma || new PrismaClient();

if(process.env.NODE_ENV !== 'production') globalforPrisma.pirsma = prisma;

export default prisma;