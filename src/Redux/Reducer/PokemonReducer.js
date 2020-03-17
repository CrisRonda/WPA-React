import { pokemon } from "../actionsTypes";

const initialState = {
  pokemons: [],
  pokemonsInfo: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case pokemon.GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case pokemon.INFO_DATA_POKEMON:
      return {
        ...state,
        pokemonsInfo: [...state.pokemonsInfo, action.payload]
      };
    default:
      return state;
  }
};
export default reducer;
