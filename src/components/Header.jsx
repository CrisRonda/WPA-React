import React from "react";
import logo from "../assets/Images/pokeball.png";
import "../App.css";

export default props => {
  return (
    <div>
      <div className="card-style">
        <header className="App-header">
          <h1 className="App-title">{props.title}</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {props.children}
      </div>
    </div>
  );
};
