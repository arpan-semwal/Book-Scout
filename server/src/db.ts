import { PrismaClient } from '../prisma/generated/index.js'; // Added /index.js
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';

// 1. Create the connection pool to Postgres
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// 2. Wrap it in the Prisma 7 Adapter
const adapter = new PrismaPg(pool);

// 3. Create the reusable Prisma instance
const prisma = new PrismaClient({ adapter });

export default prisma;