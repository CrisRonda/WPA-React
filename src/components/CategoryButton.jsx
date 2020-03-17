import React from "react";
import part1 from "../assets/Images/part1.png";
import "../App.css";

export default props => {
  const { onClick, title } = props;
  return (
    <div
      className="container-button"
      style={{ backgroundColor: props.color }}
      id={title}
      onClick={onClick}
    >
      <img id={title} src={part1} className="bt-rg-pk" alt="logo" />
      <span id={title}>{title}</span>
    </div>
  );
};
