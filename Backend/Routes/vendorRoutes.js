const express = require("express");
const router = express.Router();
const Item = require("../Models/Item");

// POST route to add a new item
router.post("/add-item", async (req, res) => {
  try {
    const { productName, productPrice, productImage } = req.body;

    // Create a new item
    const newItem = new Item({
      productName,
      productPrice,
      productImage,
    });

    // Save the item to the database
    await newItem.save();

    res.status(201).json({ message: "Item added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/your-items", async (req, res) => {
  try {
    // Retrieve all items
    const items = await Item.find();

    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
