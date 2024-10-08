"use server";
import { Query, ID } from "node-appwrite";
import { parseStringify } from "../utils";
import * as sdk from "node-appwrite";

const client = new sdk.Client()
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
  .setProject(process.env.PROJECT_ID!)
  .setKey(process.env.API_KEY!);

const users = new sdk.Users(client);

export const testConnection = async () => {
  try {
    const result = await users.list([Query.limit(1)]);
    console.log("Connection successful. Total users:", result.total);
    return {
      success: true,
      message: "Connection successful",
      total: result.total,
    };
  } catch (error) {
    console.error("Connection failed:", error);
    return { success: false, message: "Connection failed", error };
  }
};

export const createUser = async (user: CreateUserParams) => {
  try {
    // Test connection before creating user
    const connectionTest = await testConnection();
    if (!connectionTest.success) {
      throw new Error("Database connection failed");
    }

    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log("User created successfully:", newUser.$id);
    return parseStringify(newUser);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error creating user:", error);
    if (error && error.code === 409) {
      console.log("User already exists, fetching existing user");
      const documents = await users.list([Query.equal("email", user.email)]);
      return documents?.users[0] ? parseStringify(documents.users[0]) : null;
    }
    throw error; // Re-throw the error for the caller to handle
  }
};

// Uncomment to test connection when this module is imported
testConnection().then(console.log).catch(console.error);



export const getUser = async (userId : string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.log(error);
  }
}