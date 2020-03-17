const pokeURL = "https://pokeapi.co/api/v2/";

const fetchinAllPokemon = requestURL => {
  try {
    fetch(requestURL)
      .then(response => response.json())
      .then(pokemons => Object.values(pokemons.results));
  } catch (e) {
    console.log("Ocurrio un errror en obterner");
    console.log(e);
  }
};

const getPokemonsInGenerations = generation => {
  let requestURL;
  switch (generation) {
    case 0:
      requestURL = pokeURL + "pokemon?limit=3";
      console.log(requestURL);
      fetchinAllPokemon(requestURL);
      break;

    default:
      break;
  }
};
export { getPokemonsInGenerations, fetchinAllPokemon };
