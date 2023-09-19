import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import YourItems from "./Vendor/YourItems";
import AddNewItem from "./Vendor/AddNewItem";
import Transactions from "./Vendor/Transactions";

function Vendor() {
  return (
    <div>
      <h2>Vendor Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/vendor/your-items">Your Items</Link>
          </li>
          <li>
            <Link to="/vendor/add-new-item">Add New Item</Link>
          </li>
          <li>
            <Link to="/vendor/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/your-items" element={<YourItems />} />
        <Route path="/add-new-item" element={<AddNewItem />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
}

export default Vendor;
