import { DB_NAME, DB_URL } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbConnectionInstance = await mongoose.connect(`${DB_URL}/${DB_NAME}`);
    console.log("DB Connection", dbConnectionInstance.connection.host);
  } catch (error) {
    console.log("Error in connection", error);
    process.exit(1);
  }
};

export default connectDB;