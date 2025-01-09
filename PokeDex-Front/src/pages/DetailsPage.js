// src/pages/DetailsPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../services/api";

function DetailsPage() {
  const { id } = useParams(); // get l'id de pokemon de la route
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // get les détails des pokemons
    fetchPokemonDetails(id)
      .then((data) => setPokemon(data))
      .catch((err) => console.error("Failed to fetch Pokémon details:", err));
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-page">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <div className="pokemon-details">
        <p><strong>Type:</strong> {pokemon.type}</p>
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.join(", ")}</p>
        {/* afficher toutes les infos de la DB */}
      </div>
    </div>
  );
}

export default DetailsPage;
