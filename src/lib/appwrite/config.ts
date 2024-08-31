import { Client, Account, Databases, Storage, Avatars } from "appwrite";
export const appwriteConfig = {
  projectId: "peek", //process.env.APPWRITE_PROJECT_ID as string,
  url: "https://cloud.appwrite.io/v1", //process.env.APPWRITE_PROJECT_URL
};

// Initialize Appwrite client instance.
export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
