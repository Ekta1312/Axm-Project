const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
