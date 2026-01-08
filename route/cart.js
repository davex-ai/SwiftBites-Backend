import express from 'express'
import { addToCart, clearUserCart, getCart, removeFromCart, updateCartItem } from '../controller/cart.js';
const router = express.Router();

import { protect } from '../middleware/authMiddleware.js';

router.post('/cart', protect, addToCart);
router.delete('/cart', protect, removeFromCart);
router.get('/my-cart', protect, getCart);
router.patch('/cart/:id', protect, updateCartItem);
router.delete('/cart-clear', protect, clearUserCart);

export default router