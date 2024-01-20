import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import { useMemo } from 'react';

export default function PokemonGrid({ pokeData, updateScore, isClicked, setPokeData, setIsClicked, setIsGameOver }) {
  const memoizedPokemonCards = useMemo(() => {
    return pokeData.map((pokemon) => (
      <PokemonCard
        key={pokemon.name}
        setPokeData={setPokeData}
        pokemon={pokemon}
        updateScore={updateScore}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        setIsGameOver={setIsGameOver}
      />
    ));
  }, [pokeData, setPokeData, updateScore, isClicked, setIsClicked, setIsGameOver]);
  return (
    <div className="m-4 grid grid-cols-3 items-center justify-items-center gap-4 p-4 md:grid-cols-5">
      {memoizedPokemonCards}
    </div>
  );
}

PokemonGrid.propTypes = {
  pokeData: PropTypes.array.isRequired,
  updateScore: PropTypes.func.isRequired,
  isClicked: PropTypes.array.isRequired,
  setPokeData: PropTypes.func.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
};
