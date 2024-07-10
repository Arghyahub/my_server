import mongoose from "mongoose";

const DB_URL = process.env.MONGODB || "mongodb://localhost:27017/test";

export default async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
