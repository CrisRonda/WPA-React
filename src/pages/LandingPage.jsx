import React from "react";
import { Container, CategoryButton, Header, News } from "../components";
import "../App.css";

function LandingPage() {
  return (
    <Container>
      <Header border={true} title="What Pokemon are you looking for?">
        <div className="container-input">
          <input
            type="text"
            placeholder="Search Pokemon, Move, Ability, etc"
          ></input>
        </div>
        <div className="container-buttons">
          <CategoryButton title="Pokedex" color="#6AF3CA" />
          <CategoryButton title="Moves" color="#FA6555" />
          <CategoryButton title="Abilities" color="#429BED" />
          <CategoryButton title="Items" color="#FFCE4B" />
          <CategoryButton title="Locations" color="#9F5BBA" />
          <CategoryButton title="Type Charts" color="#B1736C" />
        </div>
      </Header>
      <News />
    </Container>
  );
}

export default LandingPage;
