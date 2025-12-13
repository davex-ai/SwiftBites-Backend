import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    address: {type: String, required: true },
    phoneNo: {type: Number, required: true},
    city: {type: String, required: true },
    country: {type: String, required: true },
    googleId: { type: String },
    role: { type: String, default: "user" },
    cart: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            quantity: { type: Number, default: 1 }
        }
    ],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
