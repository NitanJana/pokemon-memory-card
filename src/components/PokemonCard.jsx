import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon, updateScore, isClicked, setIsClicked, setIsGameOver }) => {
  const handleScore = () => {
    if (isClicked.includes(pokemon)) {
      setIsGameOver(true);
    } else {
      setIsClicked((prev) => {
        return [...prev, pokemon];
      });
      updateScore();
    }
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
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgBlob: PropTypes.instanceOf(Blob).isRequired,
  }).isRequired,
  updateScore: PropTypes.func.isRequired,
  isClicked: PropTypes.array.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
};

export default PokemonCard;
