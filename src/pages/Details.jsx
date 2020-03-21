import React from "react";
import { Container, Header, CardPokemonType } from "../components";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";

const URL_IMAGE = "https://pokeres.bastionbot.org/images/pokemon/";

function Details(props) {
  const pokemon = props.location.state.pokemon;
  const bgColor = props.location.state.bgColor;

  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", bgColor);
  document.title = "Pokemon Details";

  const {
    name,
    types,
    id,
    moves,
    height,
    weight,
    abilities,
    sprites,
    stats
  } = pokemon;
  let history = useHistory();
  function onClickGoBack() {
    history.goBack();
  }
  function setNumberID(id) {
    const lenght = id.toString().length;
    if (lenght === 1) return `#00${id}`;
    if (lenght === 2) return `#0${id}`;
    return `#${id}`;
  }
  const Tab = props => {
    const { onClick, isActive } = useTabState();
    return (
      <button
        onClick={onClick}
        className={`button-tab ${isActive ? "button-tab-active" : ""}`}
      >
        {props.children}
      </button>
    );
  };

  const Panel = props => {
    const isActive = usePanelState();
    return isActive ? <>{props.children}</> : null;
  };
  const itemInfo = (name, color) => {
    return (
      <div className="container-moves-move" style={{ backgroundColor: color }}>
        <p> {name}</p>
      </div>
    );
  };
  const rateStat = (name, base) => {
    let rate = 1;
    switch (name) {
      case "speed":
        const speed = 317;
        rate = base / speed;
        return { max: speed, rate };
      case "special-defense":
        const spDef = 284;
        rate = base / spDef;
        return { max: spDef, rate };
      case "special-attack":
        const spAtk = 350;
        rate = base / spAtk;
        return { max: spAtk, rate };
      case "defense":
        const defense = 218;
        rate = base / defense;
        return { max: defense, rate };
      case "attack":
        const attack = 306;
        rate = base / attack;
        return { max: attack, rate };
      case "hp":
        const hp = 354;
        rate = base / hp;
        return { max: hp, rate };
      default:
        return { base, rate };
    }
  };
  const renderStats = statElement => {
    const { base_stat, stat } = statElement;
    const getRate = rateStat(stat.name, base_stat);
    const rate = 100 * getRate.rate;
    const maxValue = getRate.max;

    return (
      <>
        <div className="stat-info">
          <h3>{stat.name}</h3>
          <span>{base_stat}</span>
          <div className="stat-bar">
            <div
              style={{ width: `${rate}%`, backgroundColor: "#4BC07A" }}
              className="stat-bar-level"
            />
            <p>Max: {maxValue}</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Container>
        <Header
          onClickGoBack={onClickGoBack}
          title={name}
          back={true}
          love={true}
          isWhite={true}
          bgColor={bgColor}
        >
          <div className="micro-details">
            {types.map(item => (
              <CardPokemonType title={item.type.name} />
            ))}
            <span>{setNumberID(id)}</span>
          </div>
          <img
            className="details-img"
            src={`${URL_IMAGE}${id}.png`}
            alt="pokemon"
          />
          <div className="pokemon-details">
            <div>
              <Tabs>
                <div className="header-tab">
                  <Tab>About</Tab>
                  <Tab>Base stats</Tab>
                  <Tab>Moves</Tab>
                </div>

                <Panel>
                  <div className="container-about">
                    <h2>{name}</h2>
                    <div className="section-about">
                      <h3>abilities</h3>
                      <div className="container-moves">
                        {abilities.map(abilitieItem =>
                          itemInfo(abilitieItem.ability.name, bgColor)
                        )}
                      </div>
                    </div>
                    <div className="section-about">
                      <h3>More info</h3>
                    </div>
                    <div className="container-height-weight">
                      <div className="detail-height-weight">
                        <span>Height</span>
                        <p>{height} cm</p>
                      </div>
                      <div className="detail-height-weight">
                        <span>Weight</span>
                        <p>{weight} ksg</p>
                      </div>
                    </div>
                  </div>
                </Panel>
                <Panel>
                  <div className="container-about">
                    <h2>Stats</h2>
                    <div className="section-about">
                      <h3>Sprites</h3>
                    </div>
                    <div className="container-height-weight">
                      {Object.values(sprites).map(
                        sprite => sprite && <img src={sprite} alt="pole" />
                      )}
                    </div>

                    <div className="section-about">
                      <h3>Stats</h3>
                    </div>
                    <div className="constainer-stats">
                      {stats.map(stant => renderStats(stant))}
                    </div>
                  </div>
                </Panel>
                <Panel>
                  <div className="container-about">
                    <h2>All moves</h2>
                  </div>
                  <div className="container-moves">
                    {moves.map(moveItem =>
                      itemInfo(moveItem.move.name, bgColor)
                    )}
                  </div>
                </Panel>
              </Tabs>
            </div>
          </div>
        </Header>
      </Container>
    </>
  );
}

export default Details;
