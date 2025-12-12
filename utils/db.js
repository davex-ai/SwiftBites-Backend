import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
    throw new Error("Invalid Mongo String");
}

let connected = false
export async function connectDB() {
    if (connected) return
    try {
        await mongoose.connect(MONGO_URI)
        connected = true
         console.log("Mongo connected to:", mongoose.connection.name);
    } catch (err) {
        console.error("Failed Connection: ", err);     
        
    }
}