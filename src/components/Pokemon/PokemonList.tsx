import { styled } from "styled-components";
import { PokemonItem } from "./PokemonItem";

const PokemonListContainer = styled.div``;

export const PokemonList = ({ pokemons }: any) => {
  pokemons = [pokemons];
  const pokemonList = pokemons.map((pokemon: any, index: number) => (
    <li key={index}>
      <PokemonItem pokemon={pokemon} />
    </li>
  ));
  return <PokemonListContainer>{pokemonList}</PokemonListContainer>;
};
