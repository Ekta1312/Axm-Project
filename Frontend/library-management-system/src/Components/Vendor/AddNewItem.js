import React, { useState } from "react";
import axios from "axios";

function AddNewItem() {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productImage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend to add the new item
      await axios.post("http://localhost:3001/vendor/add-item", formData);

      // Clear the form fields after successful submission
      setFormData({
        productName: "",
        productPrice: "",
        productImage: "",
      });

      alert("Item added successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the item.");
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="text"
          id="productPrice"
          name="productPrice"
          value={formData.productPrice}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="productImage">Product Image (URL):</label>
        <input
          type="text"
          id="productImage"
          name="productImage"
          value={formData.productImage}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddNewItem;
