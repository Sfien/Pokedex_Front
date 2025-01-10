const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

// Fonction pour récupérer les Pokémon
export const getPokemon = async () => {
    const response = await fetch(`${baseUrl}/pokemon`);
    if (!response.ok) {
        throw new Error('Échec de la récupération des Pokémon');
    }
    return response.json();
};
