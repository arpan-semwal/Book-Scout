import prisma from "../db.js"

//it will get me all the libraries info including the books too
export const getAllLibraries = async () => {
    return await prisma.library.findMany(
        {
            include:{
                inventory:{
                    include:{
                        book:true
                    }
                }
            }
        }
    );
}

/*
Export an async function named createLibrary.

    It should accept two parameters: name (string) and userId (string).

    Use prisma.library.create.

    Inside the data object, provide the name and the userId.

    Note: Because of your Prisma schema, userId is the "Foreign Key" that connects this library to the user who created it.
*/

export const createLibrary = async (
  name: string, 
  ownerId: string, 
  lat: number, 
  lng: number
) => {
  return await prisma.library.create({
    data: {
      name,
      ownerId,
      latitude: lat,
      longitude: lng,
      // The other fields like 'type' have defaults in the schema, 
      // so they are optional here!
    },
  });
};


export const getLibrariesByOwner = async (userId:string) => {
    return await prisma.library.findMany(
        {
            where:{
                ownerId:userId,
            },

            include:{
                inventory:{
                    include:{
                        book:true,
                    }
                }
            }
        }
    );
}


export const deleteLibrary = async(libraryId:number , userId:string) => {
    return await prisma.library.deleteMany({

        //It tells the database: "Look for a record where the column named id matches the value stored in the variable libraryId."
        where:{
            id:libraryId,
            ownerId:userId
        }
    })
}


export const updateLibrary = async(libraryId:number , userId:string , updateData:any) => {
    return await prisma.library.updateMany({
        where:{
            id:libraryId,
            ownerId:userId,
        },
        data:updateData
    });
}


export const getLibraryDetails = async(libraryId:number) => {
    return await prisma.library.findUnique({
        where:{
            id:libraryId,
        },
        include:{
            floors:{
                include:{
                    pricingPlans:true,
                }
            },

            inventory:{
                include:{
                    book:true
                }
            }
        }
    })
}

export const searchLibraries = async(query:string) => {
    return await prisma.library.findMany({
        where:{
            OR:[
                {name:{contains:query , mode: "insensitive"}},
                {address:{contains:query , mode:"insensitive"}}
            ]
        },

        include:{
            _count:{
                select:{floors:true}
            }
        }
    })
}