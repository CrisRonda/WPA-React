import React from "react";
import logo from "../assets/Images/pokeball.png";
import { IoIosMenu, IoIosArrowBack } from "react-icons/io";
import "../App.css";

export default props => {
  return (
    <div>
      <div
        className="card-style"
        style={{
          backgroundColor: props.bgColor ? props.bgColor : "white",
          borderRadius: props.border ? "0 0 50px 50px" : "0"
        }}
      >
        <header className="App-header">
          {props.back ? (
            <IoIosArrowBack
              color={props.isWhite ? "white" : "black"}
              className="icon"
            />
          ) : (
            <></>
          )}
          <h1
            className="App-title"
            style={{ color: props.isWhite ? "white" : "black" }}
          >
            {props.title}
          </h1>
          {props.back ? (
            <IoIosMenu
              color={props.isWhite ? "white" : "black"}
              className="icon-menu"
            />
          ) : (
            <></>
          )}
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>
        </header>
        {props.children}
      </div>
    </div>
  );
};
