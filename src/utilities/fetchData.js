import shuffleArray from './shuffleArray';
import capitalizeName from './capitalizeName';
import fetchPokemonImgUrl from './fetchPokemonImgUrl';
import getPokemonImg from './getPokemonImg';

const fetchData = async (url, limit = '100', pokeNum = '12') => {
  // Get pokemon name and pokemon urls here
  const response = await fetch(`${url}?limit=${limit}`);
  const data = await response.json();
  const results = await data.results;
  // Get only base forms of pokemons
  const trimmedResults = results.filter((pokemon) => results.indexOf(pokemon) % 3 === 0);

  // Shuffle the array elements and select random 15 pokemon
  const pokeArray = shuffleArray(trimmedResults).slice(0, pokeNum);

  // Return pokemon names , image urls and clicked status
  const updatedPokeArray = await Promise.all(
    pokeArray.map(async (pokemon) => {
      // Capitalize pokemon name before storing
      const name = await capitalizeName(pokemon.name);
      // Fetch pokemon image url
      const imgUrl = await fetchPokemonImgUrl(pokemon.url);
      // Fetch pokemon image blob
      const imgBlob = await getPokemonImg(imgUrl);

      pokemon = { name, imgBlob, clicked: false };
      return pokemon;
    }),
  );

  return updatedPokeArray;
};

export default fetchData;
