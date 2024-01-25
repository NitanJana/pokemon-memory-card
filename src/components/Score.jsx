import PropTypes from 'prop-types';

const Score = ({ score, isGameOver }) => {
  return (
    <p
      className={`from-gradient-pink to-gradient-orange rounded bg-gradient-to-r bg-clip-text p-4 font-semibold text-transparent  ${isGameOver ? 'self-end text-6xl' : 'text-2xl'}`}
    >
      Score: {score}
    </p>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

export default Score;
