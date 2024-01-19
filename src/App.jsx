import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Get pokemon name and pokemon urls here
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100');
      const data = await response.json();
      const results = await data.results;
      // Get only base forms of pokemons
      const trimmedResults = results.filter((pokemon) => results.indexOf(pokemon) % 3 === 0);

      // Select random 15 pokemon
      const pokeArray = trimmedResults.sort(() => 0.5 - Math.random()).slice(0, 15);

      // Return pokemon names and image urls
      const updatedPokeArray = await Promise.all(
        pokeArray.map(async (pokemon) => {
          const name = pokemon.name;
          const imgUrl = await getPokemonImg(pokemon.url);
          return { name, imgUrl };
        }),
      );

      setPokeData(updatedPokeArray);
      setLoading(false);
    };
    fetchData();
    // Fetch data only once when the component mounts
  }, []);

  // Fetch pokemon image url
  const getPokemonImg = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.sprites.front_default;
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        pokeData.map((pokemon) => {
          return (
            <div key={pokemon.name}>
              <p>{pokemon.name}</p>
              <img src={pokemon.imgUrl} alt={pokemon.name} />
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
