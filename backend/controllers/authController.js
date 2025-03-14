const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create user
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.cookie("token", generateToken(user._id), { httpOnly: true });
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const getUserProfile = async (req, res) => {
  res.json(req.user);
};

// Get User Profile
// const updateUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id); // Get the logged-in user

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update fields (only if provided in request body)
//     if (req.body.phone) user.phone = req.body.phone;

//     // Save updated user
//     await user.save();

//     res.json({
//       message: "Profile updated successfully!",
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//     });
//   } catch (error) {
//     console.error("Error updating profile:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// ✅ Ensure all functions are properly exported
module.exports = { registerUser, loginUser, getUserProfile };
