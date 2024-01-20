import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon, updateScore, isClicked, setPokeData, setIsClicked, setIsGameOver }) => {
  const handleScore = () => {
    if (isClicked.includes(pokemon)) {
      setIsGameOver(true);
    } else {
      setIsClicked((prev) => {
        return [...prev, pokemon];
      });
      updateScore();
      setPokeData((prev) => {
        return prev.sort(() => 0.5 - Math.random());
      });
    }
  };

  // Convert image blobs to urls
  const convertBlobs = (blob) => {
    return URL.createObjectURL(blob);
  };

  return (
    <div className="flex w-full cursor-pointer flex-col gap-2 rounded-xl bg-emerald-500 p-4" onClick={handleScore}>
      <img src={convertBlobs(pokemon.imgBlob)} alt={pokemon.name} width="100px" height="100px" />

      <p className="text-md text-center font-semibold text-white">{pokemon.name}</p>
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
  setPokeData: PropTypes.func.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
};

export default PokemonCard;
