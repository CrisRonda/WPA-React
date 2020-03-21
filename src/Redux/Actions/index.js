import { pokemon } from "../actionsTypes";
const setDataPokemon = data => {
  return {
    type: pokemon.GET_POKEMONS,
    payload: data
  };
};

export { setDataPokemon };
