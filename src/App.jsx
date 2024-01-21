import { useState, useEffect } from 'react';
import fetchData from './utilities/fetchData';

import HashLoader from 'react-spinners/HashLoader';
import PokemonGrid from './components/PokemonGrid';
import GameOver from './components/GameOver';
import Score from './components/Score';
import Footer from './components/Footer';
import './App.css';
import GameInfo from './components/GameInfo';

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const updatedPokeArray = await fetchData('https://pokeapi.co/api/v2/pokemon/', '100','12');
      setPokeData(updatedPokeArray);
      // Delay loading by 4 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    getData();
  }, []);

  return (
    <div className="grid min-h-screen items-center justify-items-center p-4 ">
      {isLoading && <HashLoader color="#fc6767" />}
      {!isLoading && <Score score={score} isGameOver={isGameOver} />}

      {!isLoading && (
        <>
          <div className="flex items-center justify-center">
            {isGameOver ? (
              <GameOver score={score} setScore={setScore} setIsGameOver={setIsGameOver} setPokeData={setPokeData} />
            ) : (
              <PokemonGrid
                pokeData={pokeData}
                setPokeData={setPokeData}
                updateScore={() => setScore(score + 1)}
                setIsGameOver={setIsGameOver}
              />
            )}
          </div>

          {!isLoading && !isGameOver && <GameInfo />}
          {!isLoading && isGameOver && <Footer />}
        </>
      )}
    </div>
  );
}

export default App;
