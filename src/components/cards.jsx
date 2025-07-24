import React from "react";

const Card = ({ title, count, icon }) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5>{title}</h5>
        <p className="display-4">{count}</p>
        <i className={icon}></i>
      </div>
    </div>
  );
};

export default Card;