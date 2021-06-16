import React from "react";

function Search({ onPokeSearch }) {

  function handleSearch(e) {
    onPokeSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
