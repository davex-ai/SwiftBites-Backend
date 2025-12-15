// seed.js
import dotenv from 'dotenv';
dotenv.config(); // ✅ MUST be first

import Product from './model/Product.js';
import { connectDB } from './utils/db.js';

// Optional: Log to verify .env loaded
console.log('MONGO_URI:', process.env.MONGO_URI);

(async () => {
  try {
    await connectDB();

    // Find products missing originalPrice
    const products = await Product.find({ originalPrice: { $exists: false } });

    for (const product of products) {
      product.originalPrice = Math.round(product.price * 1.10);
      await product.save();
    }

    console.log(`✅ Added originalPrice to ${products.length} products`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    process.exit(1);
  }
})();