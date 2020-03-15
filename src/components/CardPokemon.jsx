import React from "react";
import pokeball from "../assets/Images/pokeball.png";
import pokemon from "../assets/Images/pokemon.png";
import { CardPokemonType } from "./index";
export default props => {
  return (
    <div className="pokemon-card-container">
      <h3>Bulbasaur</h3>
      <div className="pokemon-cart-container-types">
        <CardPokemonType title="Grass" />
        <CardPokemonType title="Poison" />
      </div>
      <img className="pokemon-card-back" src={pokeball} alt="pokebola" />
      <img className="pokemon-card-img" src={pokemon} alt="pokemon1" />
    </div>
  );
};
