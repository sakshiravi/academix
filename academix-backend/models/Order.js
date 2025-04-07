const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  courses: [
    {
      id: String,
      title: String,
      price: Number,
    },
  ],
  userEmail: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  orderedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
