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