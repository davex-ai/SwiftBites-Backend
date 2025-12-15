import dotenv from 'dotenv';
dotenv.config(); 

import Product from './model/Product.js';
import { connectDB } from './utils/db.js';

(async () => {
  try {
    await connectDB();

    const products = await Product.find({ originalPrice: { $exists: false } });

    for (const product of products) {
      product.originalPrice = Math.round(product.price * 1.10);
      await product.save();
    }

    console.log(`✅ Added originalPrice to ${products.length} products`);
    process.exit(0);
  } catch (err) {
    console.error(' Seed failed:', err.message);
    process.exit(1);
  }
})();