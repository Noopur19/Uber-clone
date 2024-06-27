import mongoose from "mongoose";
// track the connection
let isConnected = false;

export const connectToDataBase = async () => {
  console.log("connecr")
  // connection to mongoose atlas db
  mongoose.set("strictQuery", true);
  if (isConnected) {
    return;
  }
  try {
    console.log("111")
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "Uber-Clone-DB", // database name
    });
    console.log("2")
    isConnected = true;
  } catch (error) {
    console.log('Error while connecting to database:', error);
  }
};