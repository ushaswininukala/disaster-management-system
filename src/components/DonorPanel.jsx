<<<<<<< HEAD
import React, { useState } from "react";
import axios from 'axios';

const Sidebar = ({ setActiveSection }) => {
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setActiveSection("logout");
    }
  };

  return (
    <div className="sidebar">
      <h2>Donor Panel</h2>
      <ul>
        <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
        <li onClick={() => setActiveSection("donateNow")}>Donate Now</li>
        <li onClick={() => setActiveSection("donateFund")}>Donate Fund</li>
        <li onClick={() => setActiveSection("allDonations")}>My All Donations</li>
        <li onClick={() => setActiveSection("manageDonation")}>Manage Donation</li>
        <li onClick={() => setActiveSection("profile")}>Profile</li>
        <li onClick={() => setActiveSection("changePassword")}>Change Password</li>
        <li onClick={handleLogout} className="logout">Logout</li>
      </ul>
    </div>
  );
};




const DashboardCard = ({ title, count }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{count}</p>
  </div>
);

const DonateNowForm = () => {
  const [donation, setDonation] = useState({
    donorName: "",
    item:"",
    image: null,
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setDonation((prev) => ({ ...prev, image: e.target.files[0] }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting donation:", donation); // Log the donation object
    try {
      const response = await axios.post('http://localhost:5000/donate', donation);
      alert("Donation Submitted!");
      console.log(response.data); // Log the response from the server
      // Reset the form
      setDonation({
        donorName: "",
        item: "",
        image: null,
        location: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting donation:", error);
      alert("Failed to submit donation.");
    }
  };

  return (
    <div className="donate-form">
      <h2>Donate Now</h2>
      <form onSubmit={handleSubmit}>
      <label>Donor Name:</label>
        <input type="text" name="donorName" onChange={handleChange} required />

        <label>Donation Name:</label>
        <select name="item" onChange={handleChange} required>
          <option value="">Select Donation Type</option>
          <option value="Food Donation">Food Donation</option>
          <option value="Cloth Donation">Cloth Donation</option>
          <option value="Footwear Donation">Footwear Donation</option>
          <option value="Vessels Donation">Vessels Donation</option>
          <option value="Furniture Donation">Furniture Donation</option>
          <option value="Book Donation">Book Donation </option>
          <option value="Other">Other</option>
        </select>

        <label>Upload Donation Image:</label>
        <input type="file" name="image" onChange={handleImageChange} required />

        <label>Collection Location:</label>
        <input type="text" name="location" onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" onChange={handleChange} required />

        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

const DonateFundForm = () => {
  const [fund, setFund] = useState({
    accountHolder: "",
    accountNumber: "",
    expiryDate: "",
    cvc: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFund((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Fund Donation Submitted!");
    console.log(fund);
  };

  return (
    <div className="donate-form">
      <h2>Donate Fund</h2>
      <form onSubmit={handleSubmit}>
        <label>Account Holder Name:</label>
        <input type="text" name="accountHolder" onChange={handleChange} required />

        <label>Account Number:</label>
        <input type="text" name="accountNumber" onChange={handleChange} required />

        <label>Expiry Date:</label>
        <input type="text" name="expiryDate" placeholder="MM/YY" onChange={handleChange} required />

        <label>CVC Code:</label>
        <input type="text" name="cvc" maxLength="3" onChange={handleChange} required />

        <label>Amount:</label>
        <input type="number" name="amount" onChange={handleChange} required />

        <button type="submit">Donate Fund</button>
      </form>
    </div>
  );
};
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


const DonorDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="container">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="main-content">
        

        {activeSection === "dashboard" && (
          <div className="dashboard-cards">
            <DashboardCard title="Total Donation" count={3} />
            <DashboardCard title="All Rejected Donation" count={0} />
            <DashboardCard title="Total Pending Donation" count={0} />
            <DashboardCard title="Total Accepted Donation" count={0} />
            <DashboardCard title="My Total Delivered Donation" count={2} />
          </div>
        )}

        {activeSection === "donateNow" && <DonateNowForm />}
        {activeSection === "donateFund" && <DonateFundForm />}
        {activeSection === "changePassword" && <ChangePasswordForm />}
      </div>
    </div>
  );
};


export default DonorDashboard;
=======
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHome, FaDonate, FaList, FaUser, FaLock, FaSignOutAlt } from "react-icons/fa";
import './DonarPanel.css';
import "./Navbar.jsx";

const DonorPanel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Unauthorized access. Redirecting to login.");
            navigate("/");
            return;
        }

        // Verify token with the backend
        const verifyToken = async () => {
            try {
                const response = await axios.get("http://localhost:5000/verify", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log("Verified user:", response.data);
            } catch (error) {
                console.error("Verification failed:", error);
                alert("Unauthorized access. Redirecting to login.");
                navigate("/");
            }
        };

        verifyToken();
    }, [navigate]);

    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Donor Panel</h2>
            <ul>
                <li>
                    <FaHome className="icon" /> Dashboard
                </li>
                <li>
                    <FaDonate className="icon" /> Donate Now
                </li>
                <li>
                    <FaDonate className="icon" /> Donate Fund
                </li>
                <li>
                    <FaList className="icon" /> My All Donations
                </li>
                <li>
                    <FaList className="icon" /> Manage Donation
                </li>
                <li>
                    <FaUser className="icon" /> Profile
                </li>
                <li>
                    <FaLock className="icon" /> Change Password
                </li>
                <li>
                    <FaSignOutAlt className="icon" /> Logout
                </li>
            </ul>
        </div>
    );
};

export default DonorPanel;
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
