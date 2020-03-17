import { pokemon } from "../actionsTypes";
import axios from "axios";
const pokeURL = "https://pokeapi.co/api/v2/pokemon?limit=151";
const setDataPokemon = data => {
  return {
    type: pokemon.GET_POKEMONS,
    payload: data
  };
};
const setInfoDataPokemon = data => {
  return {
    type: pokemon.INFO_DATA_POKEMON,
    payload: data
  };
};

const fetchPokemons = payload => {
  return dispatch => {
    fetch(pokeURL)
      .then(response => response.json())
      .then(pokemons => {
        pokemons.results.map(item =>
          axios
            .get(item.url)
            .then(res => dispatch(setInfoDataPokemon(res.data)))
        );
        dispatch(setDataPokemon(pokemons.results));
      });
  };
};

export { fetchPokemons };
