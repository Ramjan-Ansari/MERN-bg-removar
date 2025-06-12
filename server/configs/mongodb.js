import mongoose from "mongoose";

async function connectDb() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/bg-removar`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:",error);
  }
}


export default connectDb;