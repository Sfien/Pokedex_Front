document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/pokemons'); // 替换为后端 API URL
    const pokemons = await response.json();

    const container = document.getElementById('pokemon-container');
    pokemons.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
        `;
        container.appendChild(card);
    });
});
