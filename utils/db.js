import mongoose from 'mongoose';

let connected = false;

export async function connectDB() {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("Invalid Mongo String");
  }

  if (connected) return;

  try {
    await mongoose.connect(MONGO_URI);
    connected = true;
    console.log("Mongo connected to:", mongoose.connection.name);
  } catch (err) {
    console.error("Failed Connection: ", err);
    throw err; 
  }
}