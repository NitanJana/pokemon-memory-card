const getPokemonImg = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
};

export default getPokemonImg;
