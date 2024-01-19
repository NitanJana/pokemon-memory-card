import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

export default function PokemonGrid({ pokeData }) {
  return (
    <div className="m-4 grid grid-cols-3 items-center justify-items-center gap-4 p-4 md:grid-cols-5">
      {pokeData.map((pokemon) => {
        return <Pokemon key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
}

PokemonGrid.propTypes = {
  pokeData: PropTypes.array.isRequired,
};
