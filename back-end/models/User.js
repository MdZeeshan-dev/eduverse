const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: false },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["learner", "trainer", "examinee", "admin"],
    required: true,
  },
  profilePicture: { type: String, default: "" },
  tokens: [{ token: String, createdAt: { type: Date, default: Date.now } }],

  phoneNumber: { type: String },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  dateOfBirth: { type: Date },
  address: {
    local: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pincode: { type: String },
  },
  qualification: { type: String },
  degree: { type: String },
  qualificationStatus: {
    type: String,
    enum: ["Pursuing", "Completed"],
    default: "Pursuing",
    required: function () {
      return this.role === "learner";
    },
  },
  profession: { type: String },
  organization: { name: String, address: String },
  interests: { type: String },

  enrolledCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],

  enrolledExams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
    },
  ],

  canEnrollCourses: { type: Boolean, default: false },

  professionalTitle: { type: String },
  totalExperience: { type: Number },
  socialLinks: {
    linkedIn: { type: String },
    github: { type: String },
    youtube: { type: String },
    twitter: { type: String },
  },
  careerDescription: { type: String },

  accessLevel: {
    type: String,
    enum: ["Full Admin", "Content Manager", "Finance Manager"],
    default: "Full Admin",
    required: function () {
      return this.role === "admin";
    },
  },

  privacySettings: {
    showEmail: { type: Boolean, default: true },
    showPhone: { type: Boolean, default: true },
    showProfession: { type: Boolean, default: true },
  },

  isBanned: { type: Boolean, default: false },

  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date },
});

module.exports = mongoose.model("User", UserSchema);
