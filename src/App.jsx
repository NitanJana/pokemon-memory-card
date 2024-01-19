import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import PokemonGrid from './components/PokemonGrid';

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
          // Store capitalized pokemon name
          const name = await capitalizeName(pokemon.name);
          const imgUrl = await getPokemonImg(pokemon.url);
          return { name, imgUrl };
        }),
      );

      setPokeData(updatedPokeArray);
    };
    fetchData();
    setLoading(false);
    // Fetch data only once when the component mounts
  }, []);

  const capitalizeName = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // Fetch pokemon image url
  const getPokemonImg = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.sprites.front_default;
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {loading ? <Loader /> : pokeData && <PokemonGrid pokeData={pokeData} />}
    </div>
  );
}

export default App;
