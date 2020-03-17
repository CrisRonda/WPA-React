import React from "react";
import { Container, Header, CardPokemonType } from "../components";
import { useHistory } from "react-router-dom";
import "../App.css";

function Details(props) {
  const pokemon = props.location.state.pokemon;
  const bgColor = props.location.state.bgColor;
  const { name, types, sprites, order } = pokemon;
  let history = useHistory();
  function onClickGoBack() {
    history.goBack();
  }
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", bgColor);
  return (
    <Container>
      <Header
        onClickGoBack={onClickGoBack}
        title={name}
        back={true}
        isWhite={true}
        bgColor={bgColor}
      >
        <div className="micro-details">
          {types.map(item => (
            <CardPokemonType title={item.type.name} />
          ))}
          {/* <span>{name} Pokemon</span> */}
          <span>#{order}</span>
        </div>
        <img
          className="details-img"
          src={sprites.front_default}
          alt="pokemon"
        />
        <div className="pokemon-details">
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices
            nibh nec faucibus semper. In pretium est turpis, semper tempor eros
            gravida sed. Nam vel nulla quis ipsum accumsan luctus. Quisque
            aliquam congue enim et iaculis. Integer sagittis ex in convallis
            consequat. Duis sodales, massa ac vestibulum commodo, justo augue
            mattis lacus, eu sagittis sapien mauris et tellus. Vestibulum lorem
            nisi, scelerisque a orci id, condimentum imperdiet lectus. Mauris
            mattis aliquam diam, at ornare enim feugiat id. Ut maximus tincidunt
            justo, in hendrerit orci interdum vel. Nunc sit amet elit id leo
            pellentesque tempus in iaculis dui. Aliquam cursus ligula neque, et
            sollicitudin dolor fermentum ut. Aliquam ornare tellus id mi
            tincidunt interdum. In malesuada mi id maximus tempus. Etiam
            vulputate nisl ac justo ultrices, a pretium mauris rutrum.
            Vestibulum dictum quis ante vitae fermentum. Integer posuere
            molestie quam nec rutrum. Curabitur nec felis bibendum, aliquam ex
            nec, convallis erat. Proin id ex ut est lobortis viverra. Phasellus
            eros libero, laoreet vitae blandit sit amet, molestie at lectus.
            Donec pulvinar iaculis nisl. Nunc auctor mollis nulla, non finibus
            dolor hendrerit sit amet. Nunc cursus turpis eget elit finibus, nec
            vulputate ipsum venenatis. Quisque ultrices gravida nulla sed
            sagittis. Aenean enim neque, efficitur volutpat nulla in,
            sollicitudin dapibus urna. Curabitur nunc neque, tristique tempor
            dictum at, semper suscipit nisi. Donec lobortis, lacus eu convallis
            fringilla, libero lacus pharetra neque, sed suscipit metus ipsum in
            leo. Etiam tempus, nisi ac volutpat molestie, erat nulla fermentum
            libero, quis ultrices mauris tortor nec risus. Vivamus mi eros,
            porta vitae scelerisque non, dapibus ut nibh. Integer dictum, ex id
            pretium accumsan, turpis ipsum congue eros, auctor euismod metus
            sapien eget metus. Mauris auctor, neque vitae ullamcorper auctor,
            magna tortor dapibus quam, sed blandit libero lectus sed lectus.
            Maecenas nulla sem, pretium sed placerat eu, placerat in tellus.
            Curabitur dapibus tincidunt justo, blandit interdum libero aliquam
            at. Donec non feugiat eros, eleifend pharetra felis. Donec cursus,
            turpis ac porttitor molestie, enim libero interdum ipsum, et
            vestibulum erat turpis ut purus. Quisque egestas dui sit amet ex
            tempor mollis. Nam bibendum neque eu tincidunt aliquam. Pellentesque
            aliquet ipsum vel neque mattis lacinia. Maecenas urna nulla, cursus
            sed blandit quis, feugiat ac lectus. Praesent ut diam gravida,
            egestas diam ut, tempor leo. Cras ac tortor id metus rutrum
            pellentesque. Mauris eget magna ac odio vulputate tincidunt. Morbi
            ligula lectus, lacinia non urna eget, cursus pellentesque nulla.
            Integer ac pulvinar elit, non pretium metus. Duis fermentum et metus
            in porttitor. Nunc in felis egestas, commodo risus nec, maximus
            felis. Donec aliquam commodo diam, ac tincidunt leo. Vestibulum et
            consequat lacus, eu porta est. Suspendisse vestibulum tortor lorem,
            eu dignissim urna ullamcorper a. In at ornare diam, ut pretium
            velit. Aliquam ut consectetur mauris, vitae sodales nisl. Aenean
            sagittis, velit in venenatis tincidunt, ante felis sollicitudin
            nulla, at elementum massa lectus et justo. Integer vitae nunc et
            libero auctor consequat. Praesent molestie dolor in neque auctor, at
            porttitor dolor pellentesque. Pellentesque purus arcu, malesuada sit
            amet mi sed, ornare dapibus purus. Integer sed condimentum ante, eu
            iaculis dui. Praesent cursus pharetra ex id luctus. Nullam at lacus
            lectus.
          </p>
        </div>
      </Header>
    </Container>
  );
}

export default Details;
