/* eslint-disable no-use-before-define */
import React from "react";
import { Container, Header, CardPokemon } from "../components";
import "../App.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonsInGenerations } from "../services/PokeApi";
import { setDataPokemon } from "../Redux/Actions/index";

const PokedexPage = props => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.PokemonReducer.pokemons);

  React.useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let history = useHistory();
  function onClickGoBack() {
    history.goBack();
  }
  const loadData = async () => {
    const getPokemons = await getPokemonsInGenerations();
    dispatch(setDataPokemon(getPokemons));
  };
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", "#fff");
  return (
    <Container bgColor="white">
      <Header title="Pokedex" back={true} onClickGoBack={onClickGoBack}>
        <div className="pokemon-cards-container">
          {pokemons.map(item => (
            <CardPokemon {...item} />
          ))}{" "}
        </div>
      </Header>
    </Container>
  );
};

export default PokedexPage;
