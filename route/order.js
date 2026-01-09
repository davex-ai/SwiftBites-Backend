import express from "express";
import {
    createOrder,
    getUserOrders,
    getOrderById,
    updateOrderStatus,
    adminFind
} from "../controller/order.js";

const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js"

router.post("/orders", protect, createOrder);
router.get("/my-orders", protect, getUserOrders);
router.get("/orders/:id", protect, getOrderById);
router.patch("/orders/:id", protect, admin, updateOrderStatus);
router.get("/admin/orders", protect, admin, adminFind)

 export default router;
