import React, { useState, useEffect } from 'react';
import { getPokemon } from '../services/api';

const Home = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Utiliser useEffect pour récupérer les données de Pokémon
    useEffect(() => {
        getPokemon()
            .then(data => {
                setPokemon(data.data); // Supposons que la réponse de l'API soit de la forme { success: true, data: [...] }
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Gestion de l'état de chargement et des erreurs
    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h1>Liste des Pokémon</h1>
            <ul>
                {pokemon.map(pokemon => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
