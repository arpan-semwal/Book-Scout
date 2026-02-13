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

export const addPricingPlan = async(userId:string , floorId:number , planData:any) => {
    // floor dhundho aur library ko inlcude karo
    const floor = await prisma.floor.findUnique({
        where:{
            id:floorId, //floor ki id se search kar re hai
        },
        include:{
            library:true //isse hum floor.library.ownerId mil jaega
        }

    });

    if(!floor || floor.library.ownerId !== userId){
        throw new Error("Unauthorized : You don't own the library this floor belongs to.");

    }

    return await prisma.pricingPlan.create({
        data:{
            floorId:floorId,
            planType:planData.planType,
            priceAmount:planData.priceAmount,
            seatsAvailable:planData.seatsAvailable,
            features:planData.features || []
        }
    })
}