const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: Number,
  category: String,
  imageUrl: String,
});

module.exports = mongoose.model("Course", courseSchema);
