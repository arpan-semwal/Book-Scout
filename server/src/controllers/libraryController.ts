import { Request , Response } from "express"
import * as libraryService from "../services/libraryService.js"
 
export const getLibraries = async(req:Request , res:Response) => {
    try{
        const library = await libraryService.getAllLibraries();
        res.status(201).json(library);
    }catch(error){
        res.status(500).json({error:"Unable to fetch"});
    }   
}
 

export const createLibrary = async(req:Request , res:Response) => {
    try{
        const {name , latitude , longitude} = req.body;

        //Get the ID of the logged-in user (attached by your own authmiddleware)
        const ownerId = (req as any).userId;

        const newLibrary = await libraryService.createLibrary(
            name,
            ownerId,
            Number(latitude),
            Number(longitude)
        );

        res.status(201).json({
            message:"Library created sucessfully",
            data:newLibrary
        });
    
    }catch(error:any){
        res.status(500).json({message: error.message});
    }

}