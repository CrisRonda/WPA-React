import React from "react";
import logo from "../assets/Images/pokeball.png";
import { IoIosMenu, IoIosArrowBack } from "react-icons/io";
import "../App.css";

export default props => {
  const { onClickGoBack } = props;
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
          <div
            onClick={onClickGoBack}
            style={{ height: props.isback ? "100%" : "inherit" }}
          >
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
              style={{
                color: props.isWhite ? "white" : "black",
                left: props.back ? "56px" : "0"
              }}
            >
              {props.title}
            </h1>
          </div>
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
