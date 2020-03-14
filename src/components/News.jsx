import React from "react";
import { CardNew } from "./index";
import "../App.css";

export default props => {
  return (
    <div className="container-news">
      <div className="header-news">
        <h2>Pokémon News</h2>
        <a href="google.com" className="App-link">
          <span>View all</span>
        </a>
      </div>
      {[1, 2, 3, 4, 5].map(item => (
        <CardNew />
      ))}
    </div>
  );
};
