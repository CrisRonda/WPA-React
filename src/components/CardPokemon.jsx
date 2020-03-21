import React from "react";
import pokeball from "../assets/Images/pokeball.png";
import { useHistory } from "react-router-dom";
import { CardPokemonType } from "./index";

export default props => {
  let history = useHistory();
  const navigateDetails = (props, bgColor) => {
    history.push({
      pathname: "/Details",
      state: {
        pokemon: props,
        bgColor
      }
    });
  };
  const selectColor = type => {
    let color = "";
    switch (type) {
      case "normal":
        color = "#A8A77A";
        break;
      case "fighting":
        color = "#C22E28";
        break;
      case "flying":
        color = "#A98FF3";
        break;
      case "poison":
        color = "#A33EA1";
        break;
      case "ground":
        color = "#E2BF65";
        break;
      case "rock":
        color = "#B6A136";
        break;
      case "bug":
        color = "#A6B91A";
        break;
      case "ghost":
        color = "#735797";
        break;
      case "steel":
        color = "#B7B7CE";
        break;
      case "fire":
        color = "#EE8130";
        break;
      case "water":
        color = "#6390F0";
        break;
      case "grass":
        color = "#7AC74C";
        break;
      case "electric":
        color = "#F7D02C";
        break;
      case "psychic":
        color = "#F95587";
        break;
      case "ice":
        color = "#96D9D6";
        break;
      case "dragon":
        color = "#6F35FC";
        break;
      case "dark":
        color = "#705746";
        break;
      case "fairy":
        color = "#D685AD";
        break;
      case "unknown":
        color = "#e6e6fa";
        break;
      case "shadow":
        color = "#a3a3a3";
        break;

      default:
        // color = "#a3a3a3";
        break;
    }
    return color;
  };
  return (
    <div
      className="pokemon-card-container"
      style={{ backgroundColor: selectColor(props.types[0].type.name) }}
      onClick={() =>
        navigateDetails(props, selectColor(props.types[0].type.name))
      }
    >
      <h3>{props.name}</h3>
      <div className="pokemon-cart-container-types">
        {props.types.map((item, index) => (
          <CardPokemonType
            key={props.id}
            title={item.type.name}
            bgColor={selectColor(props.types[0].type.name)}
          />
        ))}
      </div>
      <img className="pokemon-card-back" src={pokeball} alt="pokebola" />
      <img
        className="pokemon-card-img"
        src={props.sprites.front_default}
        alt={props.name}
      />
    </div>
  );
};
