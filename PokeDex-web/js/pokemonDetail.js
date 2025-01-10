// pokemonDetail.js

// 获取 URL 中的宝可梦 ID
const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

// 获取宝可梦详细信息
async function fetchPokemonDetail() {
    try {
        const response = await fetch(`http://localhost:3000/api/pokemon/${pokemonId}`);
        const data = await response.json();

        const pokemonDetail = document.getElementById('pokemon-detail');
        pokemonDetail.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.image}" alt="${data.name}">
            <p>Type: ${data.type}</p>
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
            <p>Description: ${data.description}</p>
        `;
    } catch (error) {
        console.error('Error fetching Pokémon detail:', error);
    }
}

// 初始化页面
window.onload = fetchPokemonDetail;
