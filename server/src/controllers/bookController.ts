import prisma from "../db.js"
import { Request, Response } from "express";
import * as bookService from "../services/bookService.js";

export const getBooks = async (req: Request , res: Response) => {
    try{
        const books = await bookService.findAllBooks();
        res.json(books);
    }catch(error){
        res.status(500).json({error:"Failed to fetch books"});
    }
}


export const searchBooks = async(req:Request , res:Response) => {
    const q = req.query.q as string;
    try{
        const results = await bookService.findBookBySearch(q || '');
        res.json(results);
    }catch(error){
        res.status(500).json({error: "Search failed"});
    }
}