import jwt from "jsonwebtoken";
import { findUserByGoogleId } from "../utils/user.js";
import { findUserProfile } from "../utils/user.js";

export const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await findUserProfile(decoded.id);
            next();
        } catch (error) {
            return res.status(401).json({ message: "Not authorized, token failed" });
        }
    } else if (req.headers["google-id"]) {
        const user = await findUserByGoogleId(req.headers["google-id"]);
        if (!user) return res.status(401).json({ message: "Google ID not recognized" });
        req.user = user;
        next();
    } else {
        return res.status(401).json({ message: "Not authorized, no token" });
    }
};
