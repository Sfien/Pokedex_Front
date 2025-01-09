import React from "react";
import "./PokemonCard.css";

function PokemonCard({ pokemon, onClick }) {
  return (
    <div className="pokemon-card" onClick={onClick}>
      {/* 使用传递过来的图片 URL */}
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default PokemonCard;