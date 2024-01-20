import { useState, useEffect } from 'react';
import { fetchData } from './utilities/fetchData';

import Loader from './components/Loader';
import PokemonGrid from './components/PokemonGrid';
import GameOver from './components/GameOver';
import './App.css';

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const updatedPokeArray = await fetchData('https://pokeapi.co/api/v2/pokemon/', '100');
      setPokeData(updatedPokeArray);
      // Delay loading by 4 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    getData();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      {isGameOver ? (
        <GameOver score={score} setScore={setScore} setIsGameOver={setIsGameOver} setPokeData={setPokeData} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <p className="absolute top-4">Score: {score}</p>
          <PokemonGrid
            pokeData={pokeData}
            setPokeData={setPokeData}
            updateScore={() => setScore(score + 1)}
            setIsGameOver={setIsGameOver}
          />
        </>
      )}
    </div>
  );
}

export default App;
