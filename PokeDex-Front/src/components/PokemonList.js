import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "../services/api";  // 从正确的路径导入

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const data = await fetchPokemonList();
        setPokemons(data);
      } catch (error) {
        console.error("Failed to fetch Pokémon list", error);
      }
    };
    getPokemons();
  }, []);

  return (
    <div>
      <h2>Pokémon List</h2>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
