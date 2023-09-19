import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <h1>Library Management System - Registration</h1>
      <p>Select User Type:</p>
      <Link to="/registration/user">User</Link>
      <Link to="/registration/vendor">Vendor</Link>
      <Link to="/registration/admin">Admin</Link>
      <br></br>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Registration;
