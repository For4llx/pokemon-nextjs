import styled from "styled-components";

const PokemonContainer = styled.div``;
const PokemonHeading = styled.h1``;
const PokemonParagraph = styled.p``;
const PokemonActions = styled.div``;
const PokemonButton = styled.button``;
const PokemonDescription = styled.div``;
const Image = styled.img`
  width: 107px;
  height: 187px;
  object-fit: cover;
`;

export const PokemonItem = ({ pokemon }: any) => {
  return (
    <PokemonContainer>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.name}
      />
      <PokemonDescription>
        <PokemonHeading>{pokemon.name}</PokemonHeading>
        <PokemonParagraph>
          {pokemon.types[0].type.name} - {pokemon.types[1].type.name}
        </PokemonParagraph>
        <PokemonParagraph>stats:</PokemonParagraph>
        <PokemonParagraph>
          {pokemon.stats[0].base_stat}hp {pokemon.stats[1].base_stat}at{" "}
          {pokemon.stats[2].base_stat}def
        </PokemonParagraph>
      </PokemonDescription>
      <PokemonActions>
        <PokemonButton>Rename</PokemonButton>
        <PokemonButton>Delete</PokemonButton>
      </PokemonActions>
    </PokemonContainer>
  );
};
