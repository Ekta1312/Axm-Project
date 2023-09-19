import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      const response = await axios.post("http://localhost:3001/register", {
        username: formData.username,
        password: formData.password,
        userType: "user", // Set the user type to 'user'
      });

      if (response.status === 201) {
        alert("User registered successfully");
        // You can redirect the user to a login page or another page here
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred during registration");
      }
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">Register</button>
      </form>
      <Link to="/">Registration</Link>
    </div>
  );
};

export default UserRegistration;
