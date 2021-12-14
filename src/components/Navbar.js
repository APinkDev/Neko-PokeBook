import React from "react";
import FavoriteContext from "../contexts/favoritesContext";
import nav_img from './title.png';

const {useContext} = React;

const Navbar = () => {
  const {favoritePokemons} = useContext(FavoriteContext)
  return (
    <nav>
      <div />
      <div>
        <img
          src={nav_img} //asi se importan imagenes en react, react de mierdaaaa
          alt="poke_api_logo"
          className="navbar-image"
        />
      </div>
      <div className="boxtop">📦 {favoritePokemons.length} in Box</div>
    </nav>
  );
};

export default Navbar;
