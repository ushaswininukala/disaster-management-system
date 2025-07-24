<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VolunteerPanel.css";

const Sidebar = ({ setActiveSection }) => {
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setActiveSection("logout");
    }
  };

  return (
    <div className="sidebar">
      <h2>Volunteer Panel</h2>
      <ul>
        <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
        <li onClick={() => setActiveSection("collectionRequest")}>Collection Request</li>
        <li onClick={() => setActiveSection("collectionHistory")}>Collection History</li>
        <li onClick={() => setActiveSection("profile")}>Profile</li>
        <li onClick={() => setActiveSection("changePassword")}>Change Password</li>
        <li onClick={handleLogout} className="logout">Logout</li>
      </ul>
=======
import React from "react";
import { Link } from "react-router-dom";
import "./VolunteerPanel.css";
import "./Navbar.jsx";
import Card from "./Card.jsx";
import "./Dashboard.jsx";
import Dashboard from "./Dashboard.jsx";

const Sidebar = () => {
  return (
    <div>
      <Card/>
      <Dashboard/>
    <div className="sidebar bg-purple text-white">
      
      <h3 className="p-3">Volunteer Panel</h3>
      <ul className="list-unstyled">
        <li><Link to="/" className="text-white">Dashboard</Link></li>
        <li><Link to="/collection-request" className="text-white">Collection Request</Link></li>
        <li><Link to="/history" className="text-white">Collection History</Link></li>
        <li><Link to="/profile" className="text-white">Profile</Link></li>
        <li><Link to="/change-password" className="text-white">Change Password</Link></li>
        <li><Link to="/logout" className="text-white">Logout</Link></li>
      </ul>
     
    </div>
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
    </div>
  );
};

<<<<<<< HEAD
const TopBar = () => (
  <div className="topbar">
    <h1>Volunteer Panel</h1>
  </div>
);

const DashboardCard = ({ title, count }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{count}</p>
  </div>
);

const ChangePasswordForm = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
    console.log(passwords);
  };

  return (
    <div className="change-password-form">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <label>Current Password:</label>
        <input type="password" name="currentPassword" onChange={handleChange} required />

        <label>New Password:</label>
        <input type="password" name="newPassword" onChange={handleChange} required />

        <label>Confirm New Password:</label>
        <input type="password" name="confirmPassword" onChange={handleChange} required />

        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

const CollectionRequest = ({ volunteerId }) => {
  const [assignedDonations, setAssignedDonations] = useState([]);

  useEffect(() => {
    const fetchAssignedDonations = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/donate/assigned/${volunteerId}`);
        setAssignedDonations(response.data);
      } catch (error) {
        console.error("Error fetching assigned donations:", error);
      }
    };
    fetchAssignedDonations();
  }, [volunteerId]);

  const handleAccept = async (donationId) => {
    try {
      const response = await axios.post(`http://localhost:5000/donate/accept/${donationId}`, {
        volunteerId,
      });
      alert(response.data.message);
      setAssignedDonations((prev) => prev.filter((donation) => donation._id !== donationId));
    } catch (error) {
      console.error("Error accepting donation:", error.response ? error.response.data : error.message);
      alert("Failed to accept donation. Please try again.");
    }
  };
  
  const handleDecline = async (donationId) => {
    try {
      const response = await axios.post(`http://localhost:5000/donate/decline/${donationId}`, {
        volunteerId,
      });
      alert(response.data.message);
      setAssignedDonations((prev) => prev.filter((donation) => donation._id !== donationId));
    } catch (error) {
      console.error("Error declining donation:", error.response ? error.response.data : error.message);
      alert("Failed to decline donation. Please try again.");
    }
  };
  
  return (
    <div className="collection-request">
      <h2>Collection Requests</h2>
      {assignedDonations.length === 0 ? (
        <p>No assigned donations yet.</p>
      ) : (
        assignedDonations.map((donation) => (
          <div key={donation._id} className="donation-card">
            <p><strong>Donor:</strong> {donation.donorName}</p>
            <p><strong>Item:</strong> {donation.item}</p>
            <p><strong>Location:</strong> {donation.location}</p>
            <p><strong>Description:</strong> {donation.description}</p>
            <div className="button-group">
              <button className="accept-btn" onClick={() => handleAccept(donation._id)}>Accept</button>
              <button className="decline-btn" onClick={() => handleDecline(donation._id)}>Decline</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const VolunteerDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [volunteerId, setVolunteerId] = useState("67bca6228d72d5887faa8571"); // Example volunteer ID

  return (
    <div className="container">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="main-content">
        <TopBar />

        {activeSection === "dashboard" && (
          <div className="dashboard-cards">
            <DashboardCard title="Collecting Donation Request" count={1} />
            <DashboardCard title="Total Received Donation Request" count={0} />
            <DashboardCard title="Total Delivered Donation" count={1} />
          </div>
        )}
        {activeSection === "collectionRequest" && <CollectionRequest volunteerId={volunteerId} />}
        {activeSection === "changePassword" && <ChangePasswordForm />}
      </div>
    </div>
  );
};

export default VolunteerDashboard;
=======
export default Sidebar;
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
