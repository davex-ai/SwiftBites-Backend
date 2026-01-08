// src/routes/wishlist.js
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  addProductToWishlist,
  removeProductFromWishlist,
  getUserWishlist
} from '../controller/wishlist.js'; 

const router = express.Router();

router.get('/wishlist', protect, getUserWishlist);
router.post('/wishlist', protect, addProductToWishlist);         
router.delete('/wishlist', protect, removeProductFromWishlist);  

export default router;