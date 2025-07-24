import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Separate states for donor and volunteer dropdown visibility
  const [showDonorOptions, setShowDonorOptions] = useState(false);
  const [showVolunteerOptions, setShowVolunteerOptions] = useState(false);

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
  };

  // Handle toggling for Donor dropdown
  const handleDonorClick = () => {
    setShowDonorOptions(!showDonorOptions);
  };

  // Handle toggling for Volunteer dropdown
  const handleVolunteerClick = () => {
    setShowVolunteerOptions(!showVolunteerOptions);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", color: "#333", textAlign: "left" }}>
          Donation Management System
        </h1>
        <nav
  style={{
    display: "flex",
    justifyContent: "flex-end", // Align buttons to the right
    gap: "20px",
    position: "absolute", // Use fixed position
     // Fix at the top
    right: "0", // Align to the right side
    zIndex: "1000", // Ensure it's above other content
   
    padding: "10px", // Add padding to give some space
  }}
>
          <button style={navStyle} onClick={() => handleNavigate("/")}>
            Home
          </button>
          <button style={navStyle} onClick={() => handleNavigate("/about")}>
            About
          </button>
          <button
            style={navStyle}
            onClick={() => handleNavigate("/donation-gallery")}
          >
            Donation Gallery
          </button>
          <button
            style={navStyle}
            onClick={() => handleNavigate("/fund-donation")}
          >
            Fund Donation
          </button>
<<<<<<< HEAD
          <button style={navStyle} onClick={() => handleNavigate("/admin")}>
=======
          <button style={navStyle} onClick={() => handleNavigate("/login")}>
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
            Admin
          </button>

          {/* Donor Dropdown */}
          <div style={{ position: "relative" }}>
            <button style={navStyle} onClick={handleDonorClick}>
              Donor
            </button>
            {showDonorOptions && (
              <div style={dropdownStyle}>
                <button
                  style={dropdownButtonStyle}
                  onClick={() => handleNavigate("/login")} // Navigate to the Login page
                >
                  Donor Login
                </button>
                <button
                  style={dropdownButtonStyle}
                  onClick={() => handleNavigate("/signup")} // Navigate to the Sign Up page
                >
                  Donor Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Volunteer Dropdown */}
          <div style={{ position: "relative" }}>
            <button style={navStyle} onClick={handleVolunteerClick}>
              Volunteer
            </button>
            {showVolunteerOptions && (
              <div style={dropdownStyle}>
                <button
                  style={dropdownButtonStyle}
                  onClick={() => handleNavigate("/vollogin")} // Navigate to the Volunteer Login page
                >
                  Volunteer Login
                </button>
                <button
                  style={dropdownButtonStyle}
                  onClick={() => handleNavigate("/volsignup")} // Navigate to the Volunteer Sign Up page
                >
                  Volunteer Sign Up
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>

      <section style={{ position: "absolute", width: "100%", height: "100vh", marginBottom: "40px" }}>
  <img
    src="https://static.toiimg.com/thumb/msid-104221732,width-1280,height-720,resizemode-4/104221732.jpg"
    alt="Donation"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</section>

    </div>
  );
};

// Styles for navigation and dropdown
const navStyle = {
  color: "#F7F7F7",
  textDecoration: "none",
  fontSize: "18px",
  cursor: "pointer",
  background: "none",
  border: "none",
  padding: "0",
  transition: "color 0.3s ease",
};

const dropdownStyle = {
  position: "absolute",
  top: "100%",
  left: "0",
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 0",
  borderRadius: "5px",
  minWidth: "160px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  zIndex: "1",
};

const dropdownButtonStyle = {
  display: "block",
  width: "100%",
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "transparent",
  color: "#fff",
  border: "none",
  textAlign: "left",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default Home;
