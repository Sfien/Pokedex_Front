// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemonList } from "../services/api";

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // liste des pokemons
    fetchPokemonList()
      .then((data) => setPokemonList(data))
      .catch((err) => console.error("Failed to fetch Pokémon list:", err));
  }, []);

  // aller ver la page de détail
  const handleCardClick = (id) => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <div className="home-page">
      <h1>Pokedex</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => handleCardClick(pokemon.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
