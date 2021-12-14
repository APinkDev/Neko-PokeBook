import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

  const pokeBox = "📦";
  const pokeX = "❌";
  const PokeStatus = favoritePokemons.includes(pokemon.name) ? pokeX : pokeBox;

const clickToBox = (e) => {
  e.preventDefault();
  updateFavoritePokemons(pokemon.name);
}

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return <div key={index} className="pokemon-type-text">{type.type.name}</div>;
            })}
          </div>
          <button onClick={clickToBox}>
          <div classname="pokemon-to-box">{PokeStatus}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
