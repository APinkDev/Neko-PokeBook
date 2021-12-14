import React from "react";
const { useState } = React;

const Searchbar = (props) => {
  //llamas primero a el nombre de la variable y luego la propiedad que vas a usar, llamando a la funcion de react useState
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const Press_Enter = (e) => {
    if (e.key === "Enter") return onClick();
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Buscar pokemon..."
          onKeyPress={Press_Enter}
          onChange={onChange}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
