// Function to get the Pokémon ID from the URL
function getPokemonIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); // Get the 'id' parameter from the URL
}

// Function to fetch detailed Pokémon data based on the ID
async function fetchPokemonDetail() {
    const pokemonId = getPokemonIdFromUrl();

    if (!pokemonId) {
        const container = document.getElementById('pokemon-detail-container');
        container.innerHTML = '<p>No Pokémon found!</p>';
        return;
    }

    try {
        // Fetch Pokémon details from the backend API using the ID
        const response = await fetch(`/api/pokemon/${pokemonId}`);

        if (response.ok) {
            const pokemon = await response.json();
            const container = document.getElementById('pokemon-detail-container');
            container.innerHTML = ''; // Clear loading message

            // Display Pokémon details
            container.innerHTML = `
                <h2>${pokemon.name}</h2>
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <p><strong>Type:</strong> ${pokemon.type}</p>
                <p><strong>Height:</strong> ${pokemon.height} meters</p>
                <p><strong>Weight:</strong> ${pokemon.weight} kg</p>
                <p><strong>Abilities:</strong> ${pokemon.abilities.join(', ')}</p>
            `;
        } else {
            const container = document.getElementById('pokemon-detail-container');
            container.innerHTML = '<p>Unable to load Pokémon details.</p>';
        }
    } catch (error) {
        console.error('Error fetching Pokémon details:', error);
        const container = document.getElementById('pokemon-detail-container');
        container.innerHTML = '<p>Network error. Please try again later.</p>';
    }
}

// Fetch Pokémon details on page load
window.onload = fetchPokemonDetail;
