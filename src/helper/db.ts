import { Employee } from "@/models/employee";
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "employees",
    });

    console.log("--- DB connected with url :: ", connection.host);
  } catch (error) {
    console.log("Failed to connect to database :: ", error);
  }
};
