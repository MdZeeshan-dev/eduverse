const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const examRoutes = require('./routes/examRoutes');
const connectDB = require("./config/db"); 
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require("./routes/adminRoutes");  // Add this line



dotenv.config(); 

const app = express();








// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use("/public", express.static("public"));

const allowedOrigins = [
  "http://localhost:5173",
  "https://learning-management-system-dglz.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/courses",courseRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/contact', contactRoutes);
// Add Admin Routes
app.use("/api/admin", adminRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
