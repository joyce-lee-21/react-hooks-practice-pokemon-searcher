import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonCards, setPokemonCards] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
    .then((r) => r.json())
    .then(data => setPokemonCards(data));
  },[])

  //search value passed up here
  const onPokeSearch = (search) => {
    setQuery(search)
  }

  const pokeSearch = pokemonCards.filter(card => {
    if (query === "") return true;
    const cardName = card.name.toLowerCase()
    const search = query.toLowerCase()
    return cardName.includes(search);
  })

  const onFormSubmit = (newObj) => {
    setPokemonCards([...pokemonCards, newObj])
  }
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={onFormSubmit} pokemonCards={pokemonCards}/>
      <br />
      <Search onPokeSearch={onPokeSearch}/>
      <br />
      <PokemonCollection pokemonCards={pokeSearch}/>
    </Container>
  );
}

export default PokemonPage;
