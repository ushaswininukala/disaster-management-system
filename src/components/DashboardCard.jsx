import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        flex: "1",
        textAlign: "center",
        margin: "10px",
        maxWidth: "200px",
      }}
    >
      <h4 style={{ marginBottom: "10px", color: "#6c757d" }}>{title}</h4>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>{value}</p>
    </div>
  );
};

export default DashboardCard;
