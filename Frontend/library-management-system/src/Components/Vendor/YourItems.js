import React, { useState, useEffect } from "react";
import axios from "axios";

function YourItems() {
  const [items, setItems] = useState([]);

  // Fetch items from the backend when the component mounts
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get(
          "http://localhost:3001/vendor/your-items"
        );

        if (response.status === 200) {
          setItems(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Your Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <h3>{item.productName}</h3>
            <p>Price: ${item.productPrice}</p>
            <img src={item.productImage} alt={item.productName} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourItems;
