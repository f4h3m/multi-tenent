import mongoose from "mongoose";

export const connectMongoDB = async () => {
  const mongoURI: string = process.env.MONGODB_URI!;
  try {
    await mongoose.connect(mongoURI);
  } catch (error) {
    console.log("error connecting db:", error);
  }
};
