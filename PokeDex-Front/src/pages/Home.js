import React, { useState, useEffect } from 'react';
import { getPokemon } from '../services/api'; // 假设这是你的 API 调用文件

const Home = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPokemon()
            .then(data => {
                setPokemon(data.data); // 假设 API 返回的数据形如 { success: true, data: [...] }
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h1>Liste des Pokémon</h1>
            <ul>
                {pokemon.map(p => (
                    <li key={p.id}>
                        <p>{p.name}</p>
                        <img 
                            src={p.image}  // 使用 image 字段的 URL
                            alt={p.name}
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
