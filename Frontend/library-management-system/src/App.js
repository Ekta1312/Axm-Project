import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./Components/Registration";
import UserRegistration from "./Components/UserRegistration";
import VendorRegistration from "./Components/VendorRegistration";
import AdminRegistration from "./Components/AdminRegistration";
import Login from "./Components/LoginPage";
import User from "./Components/User";
import Admin from "./Components/Admin"; // Import the Admin component
import Vendor from "./Components/Vendor"; // Import the Vendor component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/registration/user" element={<UserRegistration />} />
          <Route path="/registration/vendor" element={<VendorRegistration />} />
          <Route path="/registration/admin" element={<AdminRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />{" "}
          {/* Route for the Admin page */}
          <Route path="/vendor/*" element={<Vendor />} />
          {/* Route for the Vendor page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
