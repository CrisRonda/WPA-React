import axios from "axios";
const pokeURL = "https://pokeapi.co/api/v2/";

const getPokeInfo = async urlPokemonInfo => {
  const response = await axios.get(urlPokemonInfo);
  let pokemonInfo = await response.data;
  return pokemonInfo;
};

const fetchinAllPokemon = async requestURL => {
  const response = await axios.get(requestURL);
  let pokemons = await response.data.results;
  let pokemonInfo = [];
  await Promise.all(
    pokemons.map(async pokemon => {
      let pokeInfo = await getPokeInfo(pokemon.url);
      pokemonInfo.push(pokeInfo);
    })
  );
  return pokemonInfo;
};

const getPokemonsInGenerations = async () => {
  let requestURL;
  requestURL = pokeURL + "pokemon?limit=151";
  return await fetchinAllPokemon(requestURL);
};
export { getPokemonsInGenerations, fetchinAllPokemon, getPokeInfo };
