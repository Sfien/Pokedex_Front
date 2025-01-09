import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import { fetchPokemonList } from "../services/api";

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 获取宝可梦列表数据
    fetchPokemonList()
      .then((data) => setPokemonList(data))  // 设置宝可梦数据
      .catch((err) => console.error("Failed to fetch Pokémon list:", err));
  }, []);

  // 跳转到宝可梦详情页面
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
            onClick={() => handleCardClick(pokemon.id)}  // 点击卡片跳转到详情页
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
