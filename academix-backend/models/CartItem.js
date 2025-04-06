const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  },
  quantity: {
    type: Number,
    default: 1
  }
});

const CartItem = mongoose.model("CartItem", cartItemSchema);
module.exports = CartItem;
