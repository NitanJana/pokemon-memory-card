import PropTypes from 'prop-types';

export default function Pokemon({ pokemon }) {
  return (
    <div className="cursor-pointer rounded-xl bg-emerald-500 p-4">
      <p className="text-center text-md font-semibold text-white">{pokemon.name}</p>
      <img src={pokemon.imgUrl} alt={pokemon.name} width="100px" height="100px" />
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
};
