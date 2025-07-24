import React from "react";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <h4>{user}</h4>
      </div>
    </nav>
  );
};

export default Navbar;