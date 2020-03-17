import React from "react";
import "../App.css";
export default props => {
  return (
    <div
      key={props.key}
      className="pokemon-card-type"
      style={{ backgroundColor: props.bgColor }}
    >
      {" "}
      <p>{props.title}</p>
    </div>
  );
};
