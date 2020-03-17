import React from "react";
import {Container, CategoryButton, Header, News} from "../components";
import "../App.css";
import {useHistory} from "react-router-dom";

function LandingPage() {
    let history = useHistory();
    function pokeNavigation(pageId) {
        const navigator = pageId.toLowerCase();
        const arrayNavigator = [
            "pokedex",
            // "moves",
            // "abilities",
            // "items",
            // "locations",
            // "typecharts"
        ];
        const navigationIsValit = arrayNavigator.find(i => i === navigator ? true : false);
        if (navigationIsValit) {
            history.push(`/${navigator}`);
        }
    }
    return (
        <Container>
            <Header border={true}
                title="What Pokemon are you looking for?">
                <div className="container-input">
                    <input type="text" placeholder="Search Pokemon, Move, Ability, etc"></input>
                </div>
                <div className="container-buttons">
                    <CategoryButton title="Pokedex" color="#6AF3CA"
                        onClick={
                            e => pokeNavigation(e.target.id)
                        }/>
                    <CategoryButton title="Moves" color="#FA6555"
                        onClick={
                            e => pokeNavigation(e.target.id)
                        }/>
                    <CategoryButton title="Abilities" color="#429BED"
                        onClick={
                            e => pokeNavigation(e.target.id)
                        }/>
                    <CategoryButton title="Items" color="#FFCE4B"
                        onClick={
                            e => pokeNavigation(e.target.id)
                        }/>
                    <CategoryButton title="Locations" color="#9F5BBA"
                        onClick={
                            e => pokeNavigation(e.target.id)
                        }/>
                    <CategoryButton title="Type Charts" color="#B1736C"
                        onClick={
                            e => pokeNavigation(e.target.id)
                        }/>
                </div>
            </Header>
            <News/>
        </Container>
    );
}

export default LandingPage;
