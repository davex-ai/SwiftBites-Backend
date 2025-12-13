import Wishlist from "../model/Wishlist.js";
import { connectDB } from "./db.js";

export async function addToWishlist(userId, productId) {
    await connectDB();

    return await Wishlist.findOneAndUpdate(
        { user: userId },
        { $addToSet: { products: productId } },
        { new: true, upsert: true }
    );
}

export async function removeFromWishlist(userId, productId) {
    await connectDB();

    return await Wishlist.findOneAndUpdate(
        { user: userId },
        { $pull: { products: productId } },
        { new: true }
    );
}

export async function getWishlist(userId) {
    await connectDB();
    return await Wishlist.findOne({ user: userId }).populate("products");
}