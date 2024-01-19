import PropTypes from 'prop-types';

export default function Pokemon({ pokemon }) {
  return (
    <div className="w-full cursor-pointer rounded-xl bg-emerald-500 p-4">
      <p className="text-md text-center font-semibold text-white">{pokemon.name}</p>
      <img src={URL.createObjectURL(pokemon.imgBlob)} alt={pokemon.name} width="100px" height="100px" />
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgBlob: PropTypes.instanceOf(Blob).isRequired,
  }).isRequired,
};
