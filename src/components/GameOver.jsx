import PropTypes from 'prop-types';

const GameOver = ({ score, setScore, setIsGameOver, setPokeData, shuffleArray }) => {
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
    <div className="flex flex-col items-center justify-center gap-4">
      <p>Game Over Score : {score}</p>
      <button className="rounded-lg bg-emerald-400 px-4 py-2 text-xl font-bold text-white " onClick={handleClick}>
        REPLAY
      </button>
    </div>
  );
};

GameOver.propTypes = {
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  setIsGameOver: PropTypes.func.isRequired,
  setPokeData: PropTypes.func.isRequired,
  shuffleArray: PropTypes.func.isRequired,
};

export default GameOver;
