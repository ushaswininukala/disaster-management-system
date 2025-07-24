import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const stats = [
    { title: "Collection Donation Request", count: 0, icon: "fas fa-briefcase" },
    { title: "Total Received Donation Request", count: 0, icon: "fas fa-chart-pie" },
    { title: "Total Delivered Donation", count: 1, icon: "fas fa-file-alt" },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-row">
        {stats.map((stat, index) => (
          <div className="dashboard-box" key={index}>
            <i className={`${stat.icon} dashboard-icon`}></i>
            <h3 className="dashboard-box-title">{stat.title}</h3>
            <p className="dashboard-box-count">{stat.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;