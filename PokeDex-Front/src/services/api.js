// src/services/api.js
const BASE_URL = "https://musical-space-robot-v66p66jj4454hpqgx-33099.app.github.dev/"; // 后端地址"https://127.0.0.1:38155"

// 获取宝可梦列表
export const fetchPokemonList = async () => {
  const response = await fetch(`${BASE_URL}/pokemons`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon list");
  }
  return response.json();  // 返回 JSON 数据
};

// 获取宝可梦详情
export const fetchPokemonDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/pokemons/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon details");
  }
  return response.json();  // 返回 JSON 数据
};
