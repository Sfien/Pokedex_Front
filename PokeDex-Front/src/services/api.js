// src/utils/api.js
const BASE_URL = "https://shiny-couscous-69r9xg7wp6qxc464p-3000.app.github.dev/ "; // 后端地址

// 获取宝可梦列表
export const fetchPokemonList = async () => {
  const response = await fetch(`${BASE_URL}/pokemons`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon list");
  }
  return response.json();
};

// 获取宝可梦详情
export const fetchPokemonDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/pokemons/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon details");
  }
  return response.json();
};
