import 'dotenv/config'; // <--- ADD THIS LINE FIRST
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'npx tsx prisma/seed.ts', 
  },
  datasource: {
    // Now 'env' will be able to find DATABASE_URL
    url: env('DATABASE_URL'),
  },
});