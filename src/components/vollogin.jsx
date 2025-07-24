import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VolLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // React Router's navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }
    setError(""); // Clear error message if form is valid

    try {
      // Send the login credentials to the backend for validation
      const response = await axios.post("http://localhost:5000/vollogin", 
        {userName: username,
        password},
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Sending data:", { userName: username, password });

      console.log("Username:", username, "Password:", password);

      
      if (response.data.success) {
        // On success, navigate to the volunteer panel
        navigate("/volunteerpanel");
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); // Use backend error message
      } else {
        setError("An error occurred during login.");
      }
    }
    
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:
          "linear-gradient(135deg, rgba(106, 17, 203, 0.7), rgba(37, 117, 252, 0.7)), url('/donorimg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#6a11cb", fontSize: "24px" }}>
          Welcome Back!
        </h1>
        <p style={{ marginBottom: "30px", color: "#666" }}>
<<<<<<< HEAD
          Login to  Volunteer Dashboard.
=======
          Please login to manage your dashboard.
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
        </p>

        {/* Error message if fields are empty */}
        {error && (
          <div
            style={{
              color: "red",
              fontSize: "14px",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

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
              aria-label="Username" // For accessibility
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
              aria-label="Password" // For accessibility
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
              href="/volsignup" // Correct link to volunteer sign-up page
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

export default VolLogin;
