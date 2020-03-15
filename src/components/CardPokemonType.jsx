import React from "react";
import "../App.css";
export default props => {
  return (
    <div className="pokemon-card-type">
      <p>{props.title}</p>
    </div>
  );
};
