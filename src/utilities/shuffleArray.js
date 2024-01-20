const shuffleArray = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

export default shuffleArray;
