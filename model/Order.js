import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    orderItems: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        }
    ],

    shippingAddress: {
        fullName: String,
        address: String,
        city: String,
        phone: String,
    },

    totalAmount: { type: Number, required: true },

    paid: { type: Boolean, default: false },
    delivered: { type: Boolean, default: false }

}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;