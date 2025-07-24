import React from "react";
import Sidebar from "./Sidebar";
import DashboardCard from "./DashboardCard";

const DashboardPage = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, backgroundColor: "#f1f3f6", padding: "30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ color: "#343a40", fontSize: "24px" }}>Dashboard</h1>
          <p style={{ color: "#6c757d", fontSize: "14px" }}>
            Home &gt; Main Dashboard
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <DashboardCard title="Total Donations" value="3" />
          <DashboardCard title="All Rejected Donations" value="0" />
          <DashboardCard title="Total Pending Donation" value="0" />
          <DashboardCard title="Total Accepted Donation" value="0" />
          <DashboardCard title="My Total Delivered Donations" value="2" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
