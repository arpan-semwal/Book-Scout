import prisma from "../db.js"

export const addFloor = async(userId:string , libraryId:number , floorData:any) => {

    const library = await prisma.library.findUnique({
        where:{
            id:libraryId
        }
    });

    if(!library || library.ownerId !== userId){
        throw new Error("Unauthorized or Library not found");
    }


    return await prisma.floor.create({
        data:{
            libraryId:libraryId,
            floorNumber:floorData.floorNumber,
            name:floorData.name,
            totalSeats:floorData.totalSeats
        }
    });
};