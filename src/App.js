import React from "react";
import LandingPage from "./pages/LandingPage";
import PokedexPage from "./pages/PokedexPage";
import Details from "./pages/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "circular-std";
import { Provider } from "react-redux";
import store from "./Redux/";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/pokedex" component={PokedexPage} />
          <Route path="/details" component={Details} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
