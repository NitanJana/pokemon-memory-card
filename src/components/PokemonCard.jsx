import PropTypes from 'prop-types';

export default function PokemonCard({ pokemon, updateScore }) {
  const handleScore = () => {
    // console.log(pokemon);
    updateScore();
  };

  // Convert image blobs to urls
  const convertBlobs = (blob) => {
    return URL.createObjectURL(blob);
  };
  return (
    <div className="w-full cursor-pointer rounded-xl bg-emerald-500 p-4" onClick={handleScore}>
      <p className="text-md text-center font-semibold text-white">{pokemon.name}</p>

      <img src={convertBlobs(pokemon.imgBlob)} alt={pokemon.name} width="100px" height="100px" />
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgBlob: PropTypes.instanceOf(Blob).isRequired,
  }).isRequired,
  updateScore: PropTypes.func.isRequired,
};
