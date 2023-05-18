"use client";

import { Pokemon } from "@/components/Pokemon";
import { useFetchPokemons } from "@/components/Pokemon/PokemonHook";
import { theme } from "@/styles/Theme";
import { ThemeProvider } from "styled-components";
import { Roboto } from "next/font/google";
import { GlobalStyles } from "@/styles/Global";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <main className={roboto.className}>
          <Pokemon pokemons={pokemons} />
        </main>
      </ThemeProvider>
    );
  }
  return <div>Something excpected happenned</div>;
}
