"use client";

import { Pokemon } from "@/components/Pokemon";
import { useFetchPokemons } from "@/components/Pokemon/PokemonHook";
import { Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  subsets: ["latin"],
  weight: "100",
});

export default function Home() {
  const { pokemons, isErrorPokemons, isLoadingPokemons } = useFetchPokemons();

  if (isLoadingPokemons) {
    return <div>Loading...</div>;
  }

  if (isErrorPokemons) {
    return <div>Error</div>;
  }

  if (pokemons) {
    return (
      <main className={roboto.className}>
        <Pokemon pokemons={pokemons} />
      </main>
    );
  }
  return <div>Something excpected happenned</div>;
}
