import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faHandHoldingHeart, faMoneyBill, faUser, faSignOut } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#f8f9fa",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderRight: "1px solid #ddd",
      }}
    >
      <h2 style={{ color: "#dc3545", marginBottom: "30px" }}>Donor Panel</h2>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={styles.navItem}>
            <FontAwesomeIcon icon={faDashboard} style={styles.icon} />
            Dashboard
          </li>
          <li style={styles.navItem}>
            <FontAwesomeIcon icon={faHandHoldingHeart} style={styles.icon} />
            Donate Now
          </li>
          <li style={styles.navItem}>
            <FontAwesomeIcon icon={faMoneyBill} style={styles.icon} />
            Donate Fund
          </li>
          <li style={styles.navItem}>
            <FontAwesomeIcon icon={faMoneyBill} style={styles.icon} />
            My All Donations
          </li>
          <li style={styles.navItem}>
            <FontAwesomeIcon icon={faMoneyBill} style={styles.icon} />
            Manage Donations
          </li>
          <li style={styles.navItem}>
            <FontAwesomeIcon icon={faUser} style={styles.icon} />
            Profile
          </li>
          <li style={styles.navItem}>
            <FontAwesomeIcon icon={faSignOut} style={styles.icon} />
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  navItem: {
    padding: "10px 0",
    color: "#333",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
  },
  icon: {
    marginRight: "10px",
    color: "#6c757d",
  },
};

export default Sidebar;
