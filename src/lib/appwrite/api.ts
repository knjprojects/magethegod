import { account } from "./config";
import { INewUser } from "./types";
import { ID } from "appwrite";
export async function createUserAccount(user: INewUser) {
  try {
    const newaccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newaccount;
  } catch (error) {
    return error;
  }
}
