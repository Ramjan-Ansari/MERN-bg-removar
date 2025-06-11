import mongoose from "mongoose";

const mongodb_url = process.env.MONGODB_URL;

async function connectDb() {
  try {
    await mongoose.connect(`${mongodb_url}/bg-removar`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default connectDb;