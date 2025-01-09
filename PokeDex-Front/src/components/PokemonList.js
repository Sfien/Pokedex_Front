import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "../services/api";  // 从正确的路径导入
import PokemonCard from "./PokemonCard";  // 导入 PokemonCard 组件

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
          <PokemonCard key={pokemon.id} pokemon={pokemon} />  {/* 渲染每个 PokemonCard */}
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
