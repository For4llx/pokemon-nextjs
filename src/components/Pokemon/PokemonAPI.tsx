const pokeAPI = `https://pokeapi.co/api/v2/`;

export const getPokemons = async () => {
  const response = await fetch(`${pokeAPI}pokemon/lucario`);

  const data = await response.json();
  return data;
};
