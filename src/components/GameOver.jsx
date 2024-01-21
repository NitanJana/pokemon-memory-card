import PropTypes from 'prop-types';
import shuffleArray from '../utilities/shuffleArray';

const GameOver = ({ setScore, setIsGameOver, setPokeData }) => {
  const handleClick = () => {
    setPokeData((currentPokeData) => {
      // Reset all cards
      const resetCards = reset(currentPokeData);
      // randomizing the pokeData array
      return shuffleArray(resetCards);
    });
    setScore(0);
    setIsGameOver(false);
  };

  const reset = (cards) => {
    return cards.map((currentPokemon) => {
      return { ...currentPokemon, clicked: false };
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="text-lg">Play Again?</p>
      <button
        className="rounded-lg bg-gradient-to-r from-[#ec008c] to-[#fc6767]  px-4 py-2 text-xl font-bold text-white "
        onClick={handleClick}
      >
        REPLAY
      </button>
    </div>
  );
};

GameOver.propTypes = {
  setScore: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
  setPokeData: PropTypes.func.isRequired,
};

export default GameOver;
