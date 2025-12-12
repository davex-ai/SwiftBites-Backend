import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },
    password: { type: String },

    googleId: { type: String },  

    role: { type: String, default: "user" },

    cart: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            quantity: { type: Number, default: 1 }
        }
    ],

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
