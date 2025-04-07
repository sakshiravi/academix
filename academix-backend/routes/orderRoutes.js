const express = require("express");
const router = express.Router();
const Order = require("../models/Order"); // ✅ Make sure the model exists

// @route   POST /api/orders/create
router.post("/create", async (req, res) => {
  try {
    const { courses, userEmail, totalAmount } = req.body;

    if (!courses || !userEmail || !totalAmount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = new Order({
      courses,
      userEmail,
      totalAmount,
    });

    await newOrder.save();

    res.status(201).json({ message: "Order created successfully" });
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
