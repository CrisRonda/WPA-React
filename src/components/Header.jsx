import React from "react";
import logo from "../assets/Images/pokeball.png";
import { IoIosMenu, IoIosArrowBack, IoIosHeartEmpty } from "react-icons/io";
import "../App.css";

export default props => {
  const { onClickGoBack } = props;
  const arrowBack = props => {
    return (
      <IoIosArrowBack
        color={props.isWhite ? "white" : "black"}
        className="icon"
      />
    );
  };
  const loveHeart = props => {
    return (
      <IoIosHeartEmpty
        color={props.isWhite ? "white" : "black"}
        className="icon-menu"
      />
    );
  };
  const menuIcon = props => {
    return (
      <IoIosMenu
        color={props.isWhite ? "white" : "black"}
        className="icon-menu"
      />
    );
  };
  function setIcon(props, love) {
    if (love) return loveHeart(props);
    else return menuIcon(props);
  }
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
            {props.back && arrowBack(props)}
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
          {props.back && setIcon(props, props.love)}
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>
        </header>
        {props.children}
      </div>
    </div>
  );
};
