import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=2');
      const data = await response.json();
      const pokeArray = await data.results;
      const updatedData = await Promise.all(
        pokeArray.map(async (pokemon) => {
          const name = pokemon.name;
          const imgUrl = await getPokemonImg(pokemon.url);
          return { name, imgUrl };
        }),
      );
      setPokeData(updatedData);
    };
    fetchData();
  }, []);

  const getPokemonImg = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.sprites.front_default;
  };

  return (
    <div>
      {pokeData.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
            <img src={pokemon.imgUrl} alt={pokemon.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
