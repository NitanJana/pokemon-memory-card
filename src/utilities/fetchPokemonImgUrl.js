const fetchPokemonImgUrl = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.sprites.front_default;
};

export default fetchPokemonImgUrl;
