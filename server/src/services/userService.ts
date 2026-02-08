import bcrypt from 'bcrypt';
import prisma from '../db.js';
import { error } from 'node:console';
import jwt from "jsonwebtoken";

export const registerUser = async(email:string , password:string , name:string) => {
    const hashedPassword = await bcrypt.hash(password , 10);
    const user = await prisma.user.create({
        data:{
            email:email,
            name:name,
            password:hashedPassword,
        }
    });

    return user;
    
}

/*The Magic: When you call await bcrypt.compare(password, user.password), bcrypt does three things behind the scenes:

    It looks at the hash from the database and extracts the "Salt" (the random bits used to scramble it originally).

    It takes the plain text password the user just typed and hashes it using that exact same salt.

    It compares the newly generated hash with the stored hash. If they are identical, it knows the password was correct! */

export const loginUser = async(email:string , password:string) => {
    const JWT_SECRET = process.env.JWT_SECRET || 'Fallback_Secret'
    //findUnique doesn't take the email string directly. It expects an object telling it which field to look at (e.g., { where: { email } }).
    const user = await prisma.user.findUnique({
        where:{email}
    });
    // 2. If no user, throw error
    if(!user){
        throw new Error("Invalid Email or Password");
    }
    //This function takes the "plain" password from the login form and compares it to the "hashed" password from the database.
    const isMatch = await bcrypt.compare(password , user.password);

   

    //If password does not work throw new error
    if(!isMatch){
        throw new Error("Invalid Email or Password");
    }

     const token = jwt.sign(
        {userId:user.id},
        JWT_SECRET,
        {expiresIn:"1d"}

    );
    //Success! Return the user
    return {user,token};

}