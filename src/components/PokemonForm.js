import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onFormSubmit, pokemonCards}) {
  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [frontSpites, setFrontSprites] = useState()
  const [backSpites, setBackSprites] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // onFormSubmit(formData)
    const newPokemon = {
      id: pokemonCards.length + 2,
      name: name,
      hp: Number(hp),
      sprites: {
        front: frontSpites,
        back: backSpites
    }}
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
      })

    onFormSubmit(newPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={e => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={e => setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={e => setFrontSprites(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={e => setBackSprites(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
