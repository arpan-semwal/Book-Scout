
import * as dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from './generated';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';


// 1. Load environment variables


// 2. Setup the PostgreSQL driver and adapter
// Replace your pool line with this:
const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bookscout',
  password: 'password123', // Hardcode here just for the seed test to bypass the error
  port: 5433,
});
const adapter = new PrismaPg(pool);

// 3. Initialize Prisma with the adapter
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting seed...");

  // Create Admin User
 // Create Admin User
  const admin = await prisma.user.upsert({
    where: { email: "admin@bookscout.com" },
    update: {},
    create: {
      email: 'admin@bookscout.com',
      name: 'Admin User',
      password: 'hashed_password_here' // Add a dummy password string
    },
  });

  // Create Books
  const book1 = await prisma.book.upsert({
    where: { isbn: '9780743273565' },
    update: {},
    create: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: '9780743273565',
      genre: 'Classic' // Matches your schema.prisma
    }
  });

  const book2 = await prisma.book.upsert({
    where: { isbn: '9780593135204' },
    update: {},
    create: {
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      isbn: '9780593135204',
      genre: 'Sci-Fi',
    },
  });

const library1 = await prisma.library.upsert({
    where: { name: "Central City Library" },
    update: {},
    create: {
      name: "Central City Library",
      ownerId: admin.id,      // <--- ADD THIS LINE (Links the library to the admin)
      type: 'library',
      address: "123 Library Lane",
      latitude: 40.7128,
      longitude: -74.0060,
      inventory: {
        create: [
          { bookId: book1.id, stockCount: 5 },
          { bookId: book2.id, stockCount: 2 }
        ]
      }
    }
  });

  console.log("✅ Seeding finished successfully!");
  console.log("Data added:", { adminEmail: admin.email, books: [book1.title, book2.title] });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });