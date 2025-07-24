import React, { useState } from 'react';
import './volsignup.css';
import axios from "axios";

function VolSignUp() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [address, setAddress] = useState('');
=======
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
  const [error, setError] = useState(''); // State for error message
  const [success, setSuccess] = useState(''); // State for success message

  const handleUserNameChange = (event) => setUserName(event.target.value);
  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleContactChange = (event) => setContact(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
<<<<<<< HEAD
  const handleAddressChange = (event) => setAddress(event.target.value);
=======
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
<<<<<<< HEAD
    if (!userName || !firstName || !lastName || !email || !password ) {
=======
    if (!userName || !firstName || !lastName || !email || !password) {
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/volsignup", {
        userName,   // Make sure to use the correct key `userName` here
        firstName,
        lastName,
        email,
        contact,
        password,
<<<<<<< HEAD
        address,
=======
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
      });

      setSuccess(response.data.message); // Display success message
      setError(""); // Clear any previous error
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Capture and display error
      } else {
        setError("An unexpected error occurred."); // Handle other errors
      }
      setSuccess(""); // Clear success message
    }
  };

  return (
    <div className="volunteer-signup-container">
      <div className="form-wrapper">
        <h1 className="form-title">Volunteer Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
              required
            />
            <label htmlFor="userName">User Name</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              id="contact"
              value={contact}
              onChange={handleContactChange}
              required
            />
            <label htmlFor="contact">Contact</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
<<<<<<< HEAD
          <div className="form-group">
            <input
              type="address"
              className="form-control"
              id="address"
              value={address}
              onChange={handleAddressChange}
              required
            />
            <label htmlFor="address">Address</label>
          </div>
=======
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
          
          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
          {success && <div style={{ color: "green", marginBottom: "10px" }}>{success}</div>}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#4e54c8",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            Sign Up
          </button>
          
          <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
            <p>
              Already have an account?{" "}
              <a
                href="/vollogin"
                style={{ color: "#4e54c8", textDecoration: "none" }}
              >
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VolSignUp;
