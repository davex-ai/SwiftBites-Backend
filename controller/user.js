import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {
    createUser,
    findUserByEmail,
    findUserProfile,
    modifyUserProfile,
    findUserByGoogleId
} from "../utils/user.js";

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export const registerUser = async (req, res) => {
    const { name, email, password, address, phoneNo, city, country } = req.body;

    if (!name || !email || !password || !address || !phoneNo || !city || !country )
        return res.status(400).json({ message: "All fields are required" });
    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(400).json({ message: "User already exists" });
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({ name, email, password: hashedPassword, address, phoneNo, city, country  });
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
    });
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    
    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
         return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
    });
};

export const googleLogin = async (req, res) => {
    const { name, email, googleId } = req.body;
    if (!googleId || !email) return res.status(400).json({ message: "Google ID and email required" });

    let user = await findUserByGoogleId(googleId);
    if (!user) {
        user = await createUser({ name, email, googleId });
    }

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        hasFullProfile: !!(user.address && user.city && user.country && user.phoneNo),
        token: generateToken(user._id)
    });
};

export const getProfile = async (req, res) => {
    const user = await findUserProfile(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
};

// UPDATE PROFILE
export const updateProfile = async (req, res) => {
    const updatedUser = await modifyUserProfile(req.user._id, req.body);
    res.json(updatedUser);
};
