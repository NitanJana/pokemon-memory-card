import PropTypes from 'prop-types';
import shuffleArray from '../utilities/shuffleArray';
import Tilt from 'react-parallax-tilt';

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
      <p className="from-gradient-pink to-gradient-orange bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent">
        Play Again?
      </p>
      <Tilt glareEnable={true} glareMaxOpacity={0.5} glareBorderRadius={'0.5rem'} glarePosition={'all'} scale={1.1}>
        <button
          className="from-gradient-pink to-gradient-orange rounded-lg bg-gradient-to-r px-6 py-3 text-xl font-bold text-white"
          onClick={handleClick}
        >
          Replay
        </button>
      </Tilt>
    </div>
  );
};

GameOver.propTypes = {
  setScore: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
  setPokeData: PropTypes.func.isRequired,
};

export default GameOver;
