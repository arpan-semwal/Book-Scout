import prisma from '../db.js';

 

export const addBookToLibrary = async (userId: string, libraryId: number, bookData: any) => {
  // 1. Security: Does the user own this library?
  const library = await prisma.library.findFirst({
    where: { id: libraryId, ownerId: userId },
  });

  if (!library) {
    throw new Error("Unauthorized: Library not found or access denied.");
  }

  // 2. Master Catalog: Find or Create the Book globally
  const book = await prisma.book.upsert({
    where: { isbn: bookData.isbn },
    update: {}, // We don't change title/author if it's already there
    create: {
      title: bookData.title,
      author: bookData.author,
      isbn: bookData.isbn,
      genre: bookData.genre,
    },
  });

  // 3. Inventory: Check if this book is already on this library's shelf
  const existingInventory = await prisma.bookInventory.findFirst({
    where: {
      libraryId: libraryId,
      bookId: book.id,
    },
  });

  if (existingInventory) {
    // 4a. If it exists, just add to the stock
    return await prisma.bookInventory.update({
      where: { id: existingInventory.id },
      data: {
        stockCount: existingInventory.stockCount + (bookData.stockCount || 1),
        isAvailable: true,
      },
    });
  } else {
    // 4b. If it's new to this library, create a new record
    return await prisma.bookInventory.create({
      data: {
        libraryId: libraryId,
        bookId: book.id,
        priceNew: bookData.priceNew,
        priceUsed: bookData.priceUsed,
        stockCount: bookData.stockCount || 1,
        isAvailable: true,
      },
    });
  }
};