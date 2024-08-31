"use server"; //this file is progra,mmed to use server actions with tanstack/query
//not the original way of using server actions intended by nextjs, but may be much better
import { db } from "@/db";
export const CreateMongoUser = async (requestData: {
  id: string;
  username: string;
  password: string;
  email: string;
}) => {
  try {
    const existingUser = await db.user.findFirst({
      where: { id: requestData.id },
    });

    if (existingUser) {
      //res.status(400).json({ error: 'User already exists' });
      return;
    }
    const user = await db.user.create({
      data: {
        id: requestData.username, //fix id to email
        email: requestData.email,
      },
    });

    return { user: user };
    //return response.data; // This data will be available where the function is called
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error;
  }
};
