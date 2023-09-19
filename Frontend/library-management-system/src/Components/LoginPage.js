import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

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
      const response = await axios.post("http://localhost:3001/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        // Store the JWT token in localStorage or a secure cookie
        localStorage.setItem("token", response.data.token);

        // Decode the token to access user information
        const decodedToken = jwt_decode(response.data.token);

        // Access the user type from the decoded token
        const userType = decodedToken.userType;

        // Redirect based on user type
        if (userType === "admin") {
          navigate("/admin");
        } else if (userType === "vendor") {
          navigate("/vendor");
        } else {
          navigate("/user");
        }
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred during login");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
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

        <button type="submit">Login</button>
      </form>
      <Link to="/">Registration</Link>
    </div>
  );
};

export default LoginPage;
