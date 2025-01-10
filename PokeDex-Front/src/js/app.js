// Function to fetch Pokémon data from the API
async function fetchPokemonData() {
    try {
        // Fetch Pokémon data from the backend API
        const response = await fetch('/api/pokemon');
        
        if (response.ok) {
            const data = await response.json();
            const container = document.getElementById('pokemon-container');
            container.innerHTML = '';  // Clear loading message

            // Iterate over the Pokémon data and create cards with links
            data.forEach(pokemon => {
                const pokemonDiv = document.createElement('div');
                pokemonDiv.classList.add('pokemon');
                pokemonDiv.innerHTML = `
                    <a href="pokemon-detail.html?id=${pokemon.id}">
                        <img src="${pokemon.image}" alt="${pokemon.name}">
                        <h3>${pokemon.name}</h3>
                    </a>
                `;
                container.appendChild(pokemonDiv);
            });
        } else {
            const container = document.getElementById('pokemon-container');
            container.innerHTML = '<p>Unable to load Pokémon data.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        const container = document.getElementById('pokemon-container');
        container.innerHTML = '<p>Network error. Please try again later.</p>';
    }
}

// Fetch Pokémon data on page load
window.onload = fetchPokemonData;
