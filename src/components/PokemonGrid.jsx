import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';

export default function PokemonGrid({ pokeData, updateScore }) {
  return (
    <div className="m-4 grid grid-cols-3 items-center justify-items-center gap-4 p-4 md:grid-cols-5">
      {pokeData.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} updateScore={updateScore} />;
      })}
    </div>
  );
}

PokemonGrid.propTypes = {
  pokeData: PropTypes.array.isRequired,
  updateScore: PropTypes.func.isRequired,
};
