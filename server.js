import dotenv from 'dotenv';
dotenv.config(); 

console.log('MONGO_URI:', process.env.MONGO_URI); 

import express from 'express';
import cors from 'cors';
import productRoutes from "./route/product.js";
import userRoutes from "./route/user.js";
import { connectDB } from './utils/db.js'; 
import cartRoutes from "./route/cart.js";  
import wishlistRoutes from "./route/wishlist.js"; 
import orderRoutes from "./route/order.js"; 
const app = express();
app.use(cors());
app.use(express.json());

await connectDB(); 

app.use("/api/products", productRoutes);
app.use("/api", userRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api', cartRoutes);
app.use('/api', wishlistRoutes);
app.use('/api', orderRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});