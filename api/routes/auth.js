const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const generateOTP = require("../utils/generateOTP");
const sendEmail = require("../utils/sendEmail");

const router = express.Router();

// Signup Route

// Signup Route
// router.post("/signup", async (req, res) => {
//     try {
//         const { firstName, lastName, email, password } = req.body;

//         // Check if user already exists
//         let user = await User.findOne({ email });
//         if (user) return res.status(400).json({ message: "User already exists" });

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Generate OTP
//         const otp = generateOTP();
//         const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

//         // Create user with hashed password and OTP
//         user = new User({ firstName, lastName, email, password: hashedPassword, verificationOTP: otp, otpExpiresAt });
//         await user.save();

//         // Send OTP email
//         await sendEmail(email, "Email Verification OTP", `Your OTP is: ${otp}`);

//         res.status(200).json({ message: "OTP sent to email" });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", error });
//     }
// });

router.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Convert email to lowercase to avoid case sensitivity issues
        const normalizedEmail = email.toLowerCase();

        // Check if user already exists
        let user = await User.findOne({ email: normalizedEmail });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Password validation
        if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
            return res.status(400).json({ message: "Password must be at least 8 characters long and include a number & special character" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Generate OTP
        const otp = generateOTP();
        const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

        // Hash OTP for security
        const hashedOTP = await bcrypt.hash(otp, 10);

        // Create user with hashed password and OTP
        user = new User({
            firstName,
            lastName,
            email: normalizedEmail,
            password: hashedPassword,
            verificationOTP: hashedOTP,
            otpExpiresAt
        });

        await user.save();

        // Send OTP email
        await sendEmail(email, "Email Verification OTP", `Your OTP is: ${otp}`);

        res.status(200).json({ message: "OTP sent to email" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});
router.post("/verify-otp", async (req, res) => {
    try {
        const { email, otp } = req.body;
        const normalizedEmail = email.toLowerCase();

        const user = await User.findOne({ email: normalizedEmail });
        if (!user) return res.status(400).json({ message: "User not found" });

        // Check OTP expiration
        if (user.otpExpiresAt < new Date()) {
            return res.status(400).json({ message: "OTP expired" });
        }

        // Verify OTP using bcrypt comparison
        const isOTPValid = await bcrypt.compare(otp, user.verificationOTP);
        if (!isOTPValid) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        // Mark user as verified before clearing OTP
        user.isVerified = true;
        user.verificationOTP = null;
        user.otpExpiresAt = null;
        await user.save();

        res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});


// router.post("/signup", async (req, res) => {
//     try {
//         const { firstName, lastName, email, password } = req.body;

//         // Check if user already exists
//         let user = await User.findOne({ email });
//         if (user) return res.status(400).json({ message: "User already exists" });

//         // Generate OTP
//         const otp = generateOTP();
//         const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

//         // Create user with OTP
//         user = new User({ firstName, lastName, email, password, verificationOTP: otp, otpExpiresAt });
//         await user.save();

//         // Send OTP email
//         await sendEmail(email, "Email Verification OTP", `Your OTP is: ${otp}`);

//         res.status(200).json({ message: "OTP sent to email" });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", error });
//     }
// });

// OTP Verification Route


// router.post("/verify-otp", async (req, res) => {
//     try {
//         const { email, otp } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Check OTP expiration
//         if (user.otpExpiresAt < new Date()) {
//             return res.status(400).json({ message: "OTP expired" });
//         }

//         // Verify OTP
//         if (user.verificationOTP !== otp) {
//             return res.status(400).json({ message: "Invalid OTP" });
//         }

//         // Mark user as verified
//         user.isVerified = true;
//         user.verificationOTP = null;
//         user.otpExpiresAt = null;
//         await user.save();

//         res.status(200).json({ message: "Email verified successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", error });
//     }
// });

// Login Route

// OTP Verification Route
// router.post("/verify-otp", async (req, res) => {
//     try {
//         const { email, otp } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Check OTP expiration
//         if (user.otpExpiresAt < new Date()) {
//             return res.status(400).json({ message: "OTP expired" });
//         }

//         // Verify OTP
//         if (user.verificationOTP !== otp) {
//             return res.status(400).json({ message: "Invalid OTP" });
//         }

//         // Mark user as verified before clearing OTP
//         user.isVerified = true;
//         user.verificationOTP = null;
//         user.otpExpiresAt = null;
//         await user.save();

//         res.status(200).json({ message: "Email verified successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", error });
//     }
// });

// Login Route
// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Check if email is verified
//         if (!user.isVerified) {
//             return res.status(403).json({ message: "Email not verified. Please verify first." });
//         }

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate JWT Token
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

//         // Send token as an HTTP-only cookie (for security)
//         res.cookie("token", token, {
//             httpOnly: true, // Prevent XSS
//             secure: process.env.NODE_ENV === "production", // HTTPS in production
//             sameSite: "strict", // CSRF protection
//         });

//         res.status(200).json({ message: "Login successful", token });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", error });
//     }
// });

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const normalizedEmail = email.toLowerCase();

        const user = await User.findOne({ email: normalizedEmail });
        if (!user) return res.status(400).json({ message: "User not found" });

        // Check if email is verified
        if (!user.isVerified) {
            return res.status(403).json({ message: "Email not verified. Please verify first." });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: "Server misconfiguration: Missing JWT_SECRET" });
        }

        // Generate JWT Token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});


// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: "User not found" });

//         // Check if email is verified
//         if (!user.isVerified) {
//             return res.status(403).json({ message: "Email not verified. Please verify first." });
//         }

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//         // Generate JWT Token
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

//         res.status(200).json({ message: "Login successful", token });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error", error });
//     }
// });

module.exports = router;
