import prisma from '../db.js';

export const findAllBooks = async () => {
    return await prisma.book.findMany();
};

export const findBookBySearch = async (query: string) => {
    return await prisma.book.findMany({
        where:{
            OR:[
                {title: {contains:query , mode:'insensitive'}},
                {title:{contains:query , mode:'insensitive'}}
            ]
        }
    })
}