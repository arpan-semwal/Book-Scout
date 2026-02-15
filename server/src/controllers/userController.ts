import * as userService from "../services/userService.js";
import { Request , Response } from "express";

export const register = async(req:Request , res:Response) => {
     const {email , password , name , phone , role} = req.body; 
    try{
        const user = await userService.registerUser(email, password , name , phone , role);
        const {password: _, ...userWithoutPassword} = user;
        res.status(201).json(userWithoutPassword);
    }catch(error){
        res.status(400).json({error:"Unable to create a  user"});
    }
}

export const login = async(req:Request , res:Response) => {
    const {email , password} = req.body
    try{
        const {user ,token} = await userService.loginUser(email , password);
        const {password: _, ...userwithoutPassword} = user;
        res.status(200).json({user :userwithoutPassword , token});

    }catch(error){
        res.status(401).json({error:"Unable to login"});
    }
}