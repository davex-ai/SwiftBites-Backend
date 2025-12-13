// server.js
import dotenv from 'dotenv';
dotenv.config(); // ✅ runs first

console.log('MONGO_URI:', process.env.MONGO_URI); 

import express from 'express';
import cors from 'cors';
import productRoutes from "./route/product.js";
import { connectDB } from './utils/db.js'; 
import Product from './model/Product.js';
import products from './seed.js';

const app = express();
app.use(cors());
app.use(express.json());

await connectDB(); 
await Product.insertMany(products)
console.log(" 72+ products seeded");

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});