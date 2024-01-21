import PropTypes from 'prop-types';
import shuffleArray from '../utilities/shuffleArray';
import Tilt from 'react-parallax-tilt';

const PokemonCard = ({ pokemon, updateScore, setPokeData, setIsGameOver }) => {
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
    <Tilt glareEnable={true} glareMaxOpacity={0.5} glareBorderRadius={'0.75rem'} glarePosition={'all'} scale={1.1}>
      <div
        className="relative cursor-pointer select-none rounded-xl shadow-xl shadow-[#ec008e7e]"
        onClick={handleScore}
      >
        <div className="gradient-primay absolute -z-10 h-full w-full rounded-xl"></div>
        <div className="flex w-full flex-col gap-2 rounded-xl p-4">
          <img
            src={convertBlobs(pokemon.imgBlob)}
            alt={pokemon.name}
            width="110px"
            height="110px"
            className="pointer-events-none"
          />

          <p className="text-md text-center font-bold text-white">{pokemon.name}</p>
        </div>
      </div>
    </Tilt>
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
};

export default PokemonCard;
