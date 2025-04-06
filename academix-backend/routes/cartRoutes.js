const express = require("express");
const router = express.Router();
const CartItem = require("../models/CartItem");

// GET cart items
router.get("/", async (req, res) => {
  const items = await CartItem.find().populate("courseId");
  res.json(items);
});

// ADD to cart
router.post("/", async (req, res) => {
  const { courseId } = req.body;

  let item = await CartItem.findOne({ courseId });

  if (item) {
    item.quantity += 1;
    await item.save();
  } else {
    item = new CartItem({ courseId });
    await item.save();
  }

  res.status(201).json(item);
});

// DELETE from cart
router.delete("/:id", async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed from cart" });
});

module.exports = router;
