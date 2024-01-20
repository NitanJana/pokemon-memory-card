import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon, updateScore, setPokeData, setIsGameOver, shuffleArray }) => {
  const handleScore = () => {
    // Clicking card second time
    if (pokemon.clicked) {
      setIsGameOver(true);
    }
    // Clicking card first time
    else {
      toggleCardClick(shuffleArray);
      updateScore();
    }
  };

  const toggleCardClick = () => {
    setPokeData((currentPokeData) => {
      // Change the card that is clicked
      const updatedData = currentPokeData.map((currentPokemon) => {
        if (currentPokemon.name === pokemon.name) {
          return { ...currentPokemon, clicked: true };
        }
        return currentPokemon;
      });
      // randomizing the pokeData array
      return shuffleArray(updatedData);
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
  setPokeData: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
  shuffleArray: PropTypes.func.isRequired,
};

export default PokemonCard;
