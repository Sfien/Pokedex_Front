// src/App.js
import React, { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';  // citer le component Pokemon
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('http://localhost:8080/pokemons');  // 从后端 API 获取宝可梦数据
      const data = await response.json();
      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <div className="pokemon-container">
        {pokemons.map((pokemon, index) => (
          <Pokemon key={index} name={pokemon.name} image={pokemon.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
