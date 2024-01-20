import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import PokemonGrid from './components/PokemonGrid';

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [isClicked, setIsClicked] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

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
          const imgUrl = await getPokemonImgUrl(pokemon.url);
          const imgBlob = await getPokemonImg(imgUrl);
          pokemon = { name, imgBlob };
          return pokemon;
        }),
      );

      setPokeData(updatedPokeArray);
    };
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    // Fetch data only once when the component mounts
  }, []);

  // Capitalize name before storing
  const capitalizeName = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // Fetch pokemon image url
  const getPokemonImgUrl = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.sprites.front_default;
  };
  // Fetch pokemon image blob
  const getPokemonImg = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  };
  return (
    <div className="flex h-screen items-center justify-center">
      {isGameOver ? (
        <p>Game Over Score : {score}</p>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <p className="absolute top-4">Score: {score}</p>
          <PokemonGrid
            pokeData={pokeData}
            updateScore={() => setScore(score + 1)}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            setIsGameOver={setIsGameOver}
          />
        </>
      )}
    </div>
  );
}

export default App;
