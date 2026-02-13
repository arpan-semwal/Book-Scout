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

export const getUserLibraries = async(req:Request , res:Response) => {
        try{
            //the authentication middleware already verified the user
            //and attached the id here

            const userId = (req as any).userId;

            const libraries = await libraryService.getLibrariesByOwner(userId);
            res.json(libraries);
        }catch(error:any){
            res.status(500).json({message:error.message});
        }
}

export const deleteLibrary = async(req:Request , res:Response) => {
    try{
        //Convert the string ID from the URL to a Number

        const libraryId = parseInt(req.params.id as string);
        const userId = (req as any).userId;

        const result = await libraryService.deleteLibrary(libraryId,userId);

        //check if anything was actually deleted
        if(result.count === 0){
            return res.status(404).json({
                message:"Library not found or you do not have the permission to delete it."
            });
        }
        res.status(200).json({message:"Library deleted successfully"});

    }catch(error:any){
        res.status(500).json({message:error.message});
    }
}


export const updateLibrary = async(req:Request , res:Response) => {
   try{ 
    const libraryId = parseInt(req.params.id as string);
    const userId = (req as any).userId;
    const updateData = req.body;

    const result = await libraryService.updateLibrary(libraryId,userId , updateData);

    if(result.count === 0){
        return res.status(404).json({
            message:"Library not found or u do not have permission to update it"
        });
        
    }

    res.status(200).json({message:"Library updated sucessfully"});
}catch(error:any){
    res.status(500).json({message:error.message});
}
    
}


export const getLibraryDetails = async(req:Request , res:Response) => {
    try{
        const libraryId = parseInt(req.params.libraryId as string);
        const result = await libraryService.getLibraryDetails(libraryId);

        if(!result){
            return res.status(400).json({message:"Library not found"});
        }

        return res.status(200).json(result);
    }catch(error:any){
        return res.status(500).json({message:error.message});
    }
}