import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection(props) {
  // console.log(props.pokemonCards)
  return (
    <>
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {props.pokemonCards.map(card => {
      return (
        <PokemonCard key={card.name} pokemonCard={card}/>
      )
    })}
    </Card.Group>
    </>
  );
}

export default PokemonCollection;
