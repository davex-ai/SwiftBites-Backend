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

    enum: ['cash', 'card'],

    status: {
    type: String,
    enum: ['pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },

}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;