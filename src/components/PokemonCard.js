import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  // console.log(props.pokemonCard)
  const [isToggled, setIsToggled] = useState(true)

  return (
    <Card>
    <div onClick={() => setIsToggled(!isToggled)}>
      <div className="image">
        <img alt={props.pokemonCard.name} src={isToggled? props.pokemonCard.sprites.front : props.pokemonCard.sprites.back}/>
        {/* {isToggled? props.sprites.front : props.sprites.back} */}
      </div>
      <div className="content">
        <div className="header">{props.pokemonCard.name}</div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat red" />
          {props.pokemonCard.hp}
        </span>
      </div>
    </div>
  </Card>
  )
}

export default PokemonCard;
