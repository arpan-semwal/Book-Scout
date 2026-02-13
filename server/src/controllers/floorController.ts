import { Request, Response } from "express" 
import * as floorService from "../services/floorService.js";

export const addFloor = async(req:Request , res:Response) => {
    try{
    const libraryId =  parseInt(req.params.libraryId as string);
    const userId = (req as any).userId;
    const floorData = req.body;
    const result = await floorService.addFloor(userId , libraryId , floorData)


    return res.status(201).json({
        message:"Floor added" ,
         result
        });
    }catch(error:any){
       const status = error.message.includes("Unauthorized") ? 403 : 500;
        return res.status(status).json({ message: error.message });
    }

}