import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB already connected");
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: process.env.DB_NAME,
    });
    connected = true;
    console.log("MongoDB connected successfully...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
