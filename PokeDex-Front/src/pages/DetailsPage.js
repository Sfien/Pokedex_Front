import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  // 用于获取路由参数

function DetailsPage() {
  const { id } = useParams();  // 获取路由中的 id 参数
  const [pokemon, setPokemon] = useState(null);

  // 获取宝可梦详情数据
  useEffect(() => {
    fetch(`http://localhost:3000/api/pokemons/${id}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error("Error fetching Pokémon details:", error));
  }, [id]);

  // 如果没有数据，显示加载状态
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Type: {pokemon.type}</p>
      {/* 你可以根据需要添加更多的宝可梦详细信息 */}
    </div>
  );
}

export default DetailsPage;
