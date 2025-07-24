import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
  
    try {
      // Make the POST request to the backend
      const response = await axios.post("http://localhost:5000/login", {
        username, // Ensure this matches the backend field
        password,
      });
  
      // Debug: Log the response for verification
      console.log("Backend response:", response.data);
  
      // Check if the response contains the token
      if (response.data && response.data.token) {
        // Store token in localStorage
        localStorage.setItem("token", response.data.token);
  
        alert("Login successful!");
        // Navigate to the donor panel
        navigate("/donorpanel");
      } else {
        // If no token, consider this as a failure
        alert("Login failed: Unauthorized. Please try again.");
      }
    } catch (err) {
      // Debug: Log the error for detailed debugging
      console.error("Login error:", err);
  
      if (err.response && err.response.data && err.response.data.message) {
        // Show the specific error message from the backend
        alert(err.response.data.message);
      } else {
        // Generic error message for unexpected issues
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  };
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        margin: 0, // Ensure no default margin
        background: "linear-gradient(135deg, rgba(106, 17, 203, 0.7), rgba(37, 117, 252, 0.7)), url('/donorimg.jpg')",
        backgroundSize: "cover", // This ensures the image covers the entire page
        backgroundPosition: "center", // This centers the image
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px 40px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px", // Set a maximum width for the form to avoid it stretching too much
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#6a11cb", fontSize: "24px" }}>
          Welcome Back!
        </h1>
        <p style={{ marginBottom: "30px", color: "#666" }}>
          Please login to manage your dashboard.
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label
              htmlFor="username"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#6a11cb",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#2575fc")}
            onMouseOut={(e) => (e.target.style.background = "#6a11cb")}
          >
            Login
          </button>
        </form>
        <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
          <p>
            Forgot your password?{" "}
            <a
              href="/forgot-password"
              style={{ color: "#2575fc", textDecoration: "none" }}
            >
              Reset here
            </a>
          </p>
          <p>
            Don't have an account?{" "}
            <a
              href="/signup"
              style={{ color: "#2575fc", textDecoration: "none" }}
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
