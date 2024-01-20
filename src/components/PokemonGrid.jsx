import { useMemo } from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';

const PokemonGrid = ({ pokeData, updateScore,  setPokeData, setIsGameOver }) => {
  // Memoize pokemon grid
  const memoizedPokemonCards = useMemo(() => {
    return pokeData.map((pokemon) => (
      <PokemonCard
        key={pokemon.name}
        setPokeData={setPokeData}
        pokemon={pokemon}
        updateScore={updateScore}
        setIsGameOver={setIsGameOver}
      />
    ));
  }, [pokeData, setPokeData, updateScore, setIsGameOver]);

  return (
    <div className="m-4 grid grid-cols-3 items-center justify-items-center gap-4 p-4 md:grid-cols-5">
      {memoizedPokemonCards}
    </div>
  );
};

PokemonGrid.propTypes = {
  pokeData: PropTypes.array.isRequired,
  updateScore: PropTypes.func.isRequired,
  setPokeData: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
};

export default PokemonGrid;
