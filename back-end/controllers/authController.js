const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const cloudinary = require("../config/cloudinary");

const registerUser = async (req, res) => {
  try {
    console.log("Incoming Request:", req.body);

    const {
      fullName,
      username,
      email,
      password,
      role,
      phoneNumber,
      gender,
      dateOfBirth,
      qualification,
      degree,
      qualificationStatus,
      profession,
      organization,
      interests,
      professionalTitle,
      totalExperience,
      socialLinks,
      careerDescription,
      accessLevel,
      address,
    } = req.body;

    if (!username || !email || !password || !role) {
      return res
        .status(400)
        .json({ error: "All required fields must be provided." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let profilePicture = req.body.profilePicture || "";

    if (req.file) {
      const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
        folder: "user_profiles",
        transformation: [{ width: 500, height: 500, crop: "limit" }],
      });
      profilePicture = uploadedImage.secure_url;
    }

    const userData = {
      fullName,
      username,
      email,
      password: hashedPassword,
      role,
      profilePicture: profilePicture || "",
      phoneNumber,
      gender: gender || "Other",
      dateOfBirth,
      address,
      isDeleted: false,
      deletedAt: null,
    };
    console.log("Final User Data:", userData);

    if (role === "learner") {
      Object.assign(userData, {
        qualification,
        degree,
        qualificationStatus: qualificationStatus || "Pursuing",
        profession,
        organization: organization ? { name: organization, address: "" } : null,
        interests,
      });
    }

    if (role === "trainer") {
      Object.assign(userData, {
        professionalTitle,
        totalExperience,
        socialLinks,
        careerDescription,
      });
    }

    if (role === "examiner") {
      Object.assign(userData, { canEnrollCourses: false });
    }

    if (userData.role === "admin") {
      if (!userData.accessLevel) {
        userData.accessLevel = "Full Admin";
      } else if (
        !["Full Admin", "Content Manager", "Finance Manager"].includes(
          userData.accessLevel,
        )
      ) {
        return res
          .status(400)
          .json({ error: "Invalid access level provided." });
      }
    }

    console.log("Before saving, profilePicture:", profilePicture);

    const user = new User(userData);
    await user.save();

    const savedUser = await User.findOne({ username });
    console.log("Saved User in DB:", savedUser);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: error.message || "Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.isBanned) {
      return res
        .status(403)
        .json({ message: "Your account has been banned. Contact support." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user); //

    user.tokens = [{ token }];
    await user.save();

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: "Please provide current and new password." });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Current password is incorrect" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Change Password Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { registerUser, loginUser, changePassword };
