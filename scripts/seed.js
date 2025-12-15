import dotenv from 'dotenv';
dotenv.config();

import Product from '../model/Product.js';
import products from '../utils/products-seed.js';
import { connectDB } from '../utils/db.js';

(async () => {
  await connectDB();

//   Optional: wipe first (dev only)
  await Product.deleteMany({});

  for (const p of products) {
    await Product.findOneAndUpdate({ name: p.name }, p, { upsert: true });
  }

  console.log('✅ Seeded without duplicates');
  process.exit(0);
})();