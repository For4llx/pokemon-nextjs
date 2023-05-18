import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "./PokemonAPI";

export const useFetchPokemons = () => {
  const {
    data: pokemons,
    isLoading: isLoadingPokemons,
    isError: isErrorPokemons,
  } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
  });

  return {
    pokemons,
    isLoadingPokemons,
    isErrorPokemons,
  };
};
