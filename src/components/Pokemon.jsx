import PropTypes from 'prop-types';

export default function Pokemon({ pokemon }) {
  return (
    <div>
      <p>{pokemon.name}</p>
      <img src={pokemon.imgUrl} alt={pokemon.name} />
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
};
