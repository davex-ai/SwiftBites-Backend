import {
    addItemToCart,
    removeItemFromCart,
    updateCartItemQuantity,
    getUserCart,
    clearCart
} from "../utils/cart.js";
import User from "../model/User.js";

export async function addToCart(req, res) {
    try {
        const { productId, quantity } = req.body;
        const cart = await addItemToCart(req.user.id, productId, quantity);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function removeFromCart(req, res) {
    try {
        const { productId } = req.body;
        const cart = await removeItemFromCart(req.user.id, productId);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function updateCartItem(req, res) {
    try {
        const { productId, quantity } = req.body;
        const cart = await updateCartItemQuantity(req.user.id, productId, quantity);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function getCart(req, res) {
    try {
        const cart = await getUserCart(req.user.id);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function clearUserCart(req, res) {
    try {
        const cart = await clearCart(req.user.id);
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
