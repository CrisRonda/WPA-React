import React from "react";
import "../App.css";

export default props => {
  const { bgColor } = props;
  if (bgColor) document.documentElement.style.backgroundColor = bgColor;
  return <div className="App">{props.children}</div>;
};
