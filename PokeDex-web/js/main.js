// main.js

// 根据环境设置 API URL（开发、测试、生产环境可能有不同的 API 地址）
const apiUrl = process.env.NODE_ENV === 'production' 
    ? 'https://your-production-api-url.com/api/pokemon' 
    : 'http://localhost:3000/api/pokemon';  // 开发环境使用本地 API

// 获取所有宝可梦
async function fetchPokemonList() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const pokemonList = document.getElementById('pokemon-list');
        pokemonList.innerHTML = '';  // 清空现有内容

        data.forEach(pokemon => {
            const pokemonItem = document.createElement('div');
            pokemonItem.classList.add('pokemon-item');
            pokemonItem.innerHTML = `
                <a href="detail.html?id=${pokemon.id}">
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                    <h2>${pokemon.name}</h2>
                    <p>Type: ${pokemon.type}</p>
                </a>
            `;
            pokemonList.appendChild(pokemonItem);
        });
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
    }
}

// 初始化页面
window.onload = fetchPokemonList;
