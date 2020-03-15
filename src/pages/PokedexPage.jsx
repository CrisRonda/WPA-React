import React from "react";
import { Container, Header, CardPokemon } from "../components";
import "../App.css";

function PokedexPage() {
  return (
    <Container>
      <Header title="Pokedex" back={true}>
        <div className="pokemon-cards-container">
          {[
            1,
            2,
            34,
            5,
            654,
            2,
            3,
            45,
            5,
            654,
            2,
            3,
            45,
            5,
            654,
            2,
            3,
            45,
            4,
            3
          ].map(item => (
            <CardPokemon />
          ))}
        </div>
      </Header>
    </Container>
  );
}

export default PokedexPage;
