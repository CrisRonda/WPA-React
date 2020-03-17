import React from "react";
import { Container, Header, CardPokemon } from "../components";
import "../App.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../Redux/Actions/index";

const PokedexPage = props => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState([]);
  const pokemons = useSelector(state => state.PokemonReducer.pokemonsInfo);

  React.useEffect(() => {
    if (loading.length === 0) {
      dispatch(fetchPokemons());
      setLoading([{}, {}]);
    }
  }, [dispatch, loading.length]);
  let history = useHistory();
  function onClickGoBack() {
    history.goBack();
  }
  return (
    <Container bgColor="white">
      <Header title="Pokedex" back={true} onClickGoBack={onClickGoBack}>
        <div className="pokemon-cards-container">
          {pokemons.sort().map(item => (
            <CardPokemon {...item} />
          ))}
        </div>
      </Header>
    </Container>
  );
};

export default PokedexPage;
