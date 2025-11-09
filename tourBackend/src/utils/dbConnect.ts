import mongoose from "mongoose";
import { config } from "dotenv";

config();

const mongoUri = process.env.mongoUri;

export const dbConnection = async () => {
  if (!mongoUri) {
    console.error("❌ Mongo URI is not defined in .env file!");
    return;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("✅ Database connected successfully!");
  } catch (err : any) {
    console.error("❌ Error while connecting to database:", err.message);
  }
};
