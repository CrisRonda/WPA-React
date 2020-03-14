import React from "react";
import part1 from "../assets/Images/part1.png";
import "../App.css";

export default props => {
  return (
    <div className="container-button" style={{ backgroundColor: props.color }}>
      <img src={part1} className="bt-rg-pk" alt="logo" />
      <span>{props.title}</span>
    </div>
  );
};
