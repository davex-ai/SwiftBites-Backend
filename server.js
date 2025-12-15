import dotenv from 'dotenv';
dotenv.config(); 

console.log('MONGO_URI:', process.env.MONGO_URI); 

import express from 'express';
import cors from 'cors';
import productRoutes from "./route/product.js";
import userRoutes from "./route/user.js";
import { connectDB } from './utils/db.js'; 

const app = express();
app.use(cors());
app.use(express.json());

await connectDB(); 

// Used to populate DB
// await Product.insertMany(products)
// console.log(" 72+ products seeded");

app.use("/api/products", productRoutes);
app.use("/api", userRoutes);
app.use('/uploads', express.static('uploads'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});