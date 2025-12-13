import express from "express";
import {
    registerUser,
    loginUser,
    getProfile,
    updateProfile,
    googleLogin
} from "../controller/user.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google-login", googleLogin);

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

export default router;
