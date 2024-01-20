import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon, updateScore, setPokeData, setIsGameOver }) => {
  const handleScore = () => {
    // Clicking card second time
    if (pokemon.clicked) {
      setIsGameOver(true);
    }
    // Clicking card first time
    else {
      toggleCardClick();
      updateScore();
      // randomizing the pokeData array
      setPokeData((currentPokeData) => {
        return currentPokeData.sort(() => 0.5 - Math.random());
      });
    }
  };

  const toggleCardClick = () => {
    setPokeData((currentPokeData) => {
      return currentPokeData.map((currentPokemon) => {
        if (currentPokemon.name === pokemon.name) {
          return { ...currentPokemon, clicked: true };
        }
        return currentPokemon;
      });
    });
  };

  // Convert image blobs to urls
  const convertBlobs = (blob) => {
    return URL.createObjectURL(blob);
  };

  return (
    <div
      className="flex w-full cursor-pointer select-none flex-col gap-2 rounded-xl bg-emerald-500 p-4 active:bg-violet-700"
      onClick={handleScore}
    >
      <img
        src={convertBlobs(pokemon.imgBlob)}
        alt={pokemon.name}
        width="100px"
        height="100px"
        className="pointer-events-none"
      />

      <p className="text-md text-center font-semibold text-white">{pokemon.name}</p>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgBlob: PropTypes.instanceOf(Blob).isRequired,
    clicked: PropTypes.bool.isRequired,
  }).isRequired,
  updateScore: PropTypes.func.isRequired,
  isClicked: PropTypes.array.isRequired,
  setPokeData: PropTypes.func.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
};

export default PokemonCard;
