import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="heading-panel">Volunteer Panel</h3>
      <div className="navigation-panel">
        <ul className="list-unstyled">
          <li>
            <Link to="/" className="text-dark">Dashboard</Link>
          </li>
          <li>
            <Link to="/collection-request" className="text-dark">Collection Request</Link>
          </li>
          <li>
            <Link to="/history" className="text-dark">Collection History</Link>
          </li>
          <li>
            <Link to="/profile" className="text-dark">Profile</Link>
          </li>
          <li>
            <Link to="/change-password" className="text-dark">Change Password</Link>
          </li>
          <li>
            <Link to="/logout" className="text-dark">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;