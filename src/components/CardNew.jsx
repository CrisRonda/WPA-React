import React from "react";
import Image from "../assets/Images/Image.jpg";
import "../App.css";
export default props => {
  return (
    <>
      <div className="content-new">
        <div className="news-title">
          <h3>Pokémon Rumble Rush Arrives Soon</h3>
          <span>15 May 20</span>
        </div>
        <img className="news-img" src={Image} alt="imagePoke" />
      </div>
    </>
  );
};
