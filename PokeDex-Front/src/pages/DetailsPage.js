import React, { useState, useEffect } from 'react';

const DetailsPage = ({ pokemonId }) => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Obtenir les détails du Pokémon depuis l'API backend
        fetch(`http://localhost:3000/pokemon/${pokemonId}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [pokemonId]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur: {error}</p>;
    if (!pokemon) return <p>Aucun Pokémon trouvé.</p>;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />

            <h2>Information détails</h2>
            <ul>
                <li><strong>ID:</strong> {pokemon.id}</li>
                <li><strong>Type:</strong> {pokemon.type.join(', ')}</li>
                <li><strong>HP:</strong> {pokemon.stats.hp}</li>
                <li><strong>Attack:</strong> {pokemon.stats.attack}</li>
                <li><strong>Defense:</strong> {pokemon.stats.defense}</li>
                <li><strong>Special Attack:</strong> {pokemon.stats.special_attack}</li>
                <li><strong>Special Defense:</strong> {pokemon.stats.special_defense}</li>
                <li><strong>Speed:</strong> {pokemon.stats.speed}</li>
            </ul>
        </div>
    );
};

export default DetailsPage;
