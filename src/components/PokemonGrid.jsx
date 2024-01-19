import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

export default function PokemonGrid({ pokeData }) {
  return (
    <div className="grid grid-cols-5 items-center  justify-items-center gap-4">
      {pokeData.map((pokemon) => {
        return <Pokemon key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
}

PokemonGrid.propTypes = {
  pokeData: PropTypes.array.isRequired,
};
