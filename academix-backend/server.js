const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

// Load .env variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/courses", require("./routes/courseRoutes")); // ✅ Use your actual route file

// Start server on PORT from .env or fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
