import { Request, Response } from 'express';
import * as inventoryService from '../services/inventoryService.js';

export const addBook = async(req:Request , res:Response) => {

    try{
        // 1. Get the Library ID from the URL and User ID from the token
        const libraryId = parseInt(req.params.id as string);
        const userId = (req as any).userId;


        //the book details sent by the user
        const bookData = req.body;

        //Trigger the complex logic in the service
        const result = await inventoryService.addBookToLibrary(userId, libraryId, bookData);

        //Send back the the newly created/updated inventory

        res.status(201).json({
            message:"Book added to inventory successfully",
            data:result
        });
        

    }catch(error:any){
        const status = error.message.includes("Unauthorized") ? 403 : 500;
        res.status(status).json({message: error.message});
    }
}


export const getLibraryInventory = async(req:Request , res:Response) => {
    try{const id =  parseInt(req.params.id as string);

    const result = await inventoryService.getLibraryInventory(id);

    res.status(200).json({
        message:"Book Fetched",
        data:result
    });}catch(error:any){
        res.status(500).json({message:"Error fetching inventory",error:error.message});
    }
}