import styled from "styled-components";

const PokemonContainer = styled.div`
  /* Auto layout */
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 16px;
  flex-wrap: wrap;

  position: relative;
  width: 353px;
  height: 199px;

  background: #f5f5f5;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
const PokemonHeading = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 22px;
  text-transform: capitalize;
  font-style: normal;
  color: ${(props) => props.theme.darkGray};
`;

const PokemonParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: ${(props) => (props) =>
    props.darkGray ? props.theme.darkGray : props.theme.gray};
`;
const PokemonParagraphLarge = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;

  color: ${(props) => (props) =>
    props.darkGray ? props.theme.darkGray : props.theme.gray};
`;

interface IPokemonEmphasis {
  orange?: boolean;
  green?: boolean;
  red?: boolean;
  blue?: boolean;
}

const PokemonEmphasis = styled.em<IPokemonEmphasis>`
  font-style: normal;

  color: ${(props) =>
    props.orange
      ? props.theme.orange
      : props.green
      ? props.theme.green
      : props.red
      ? props.theme.red
      : props.blue
      ? props.theme.blue
      : props.theme.gray};
`;

const PokemonActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

interface IPokemonButton {
  error?: boolean;
}

const PokemonButton = styled.button<IPokemonButton>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  width: 68px;
  height: 32px;

  background-color: ${(props) =>
    props.error ? props.theme.errorColor : "#65ceef"};
  border-radius: 4px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: ${(props) => (props.error ? "#FFC6C6" : "#D6F5FF")};
`;
const PokemonDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px 16px;
  gap: 4px;

  width: 204px;
  height: 116px;

  background: #eeeeee;
  border-radius: 4px;
`;
const Image = styled.img`
  width: 107px;
  height: 167px;
  object-fit: cover;
`;

const PokemonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const PokemonItem = ({ pokemon }: any) => {
  return (
    <PokemonContainer>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={pokemon.name}
      />
      <PokemonContent>
        <PokemonDescription>
          <PokemonHeading>{pokemon.name}</PokemonHeading>
          <PokemonParagraphLarge darkGray>
            <PokemonEmphasis orange>
              {pokemon.types[0].type.name}
            </PokemonEmphasis>{" "}
            - <PokemonEmphasis>{pokemon.types[1].type.name}</PokemonEmphasis>
          </PokemonParagraphLarge>
          <PokemonParagraph>Stats:</PokemonParagraph>
          <PokemonParagraphLarge>
            <PokemonEmphasis green>
              {pokemon.stats[0].base_stat}hp
            </PokemonEmphasis>{" "}
            <PokemonEmphasis red>
              {pokemon.stats[1].base_stat}at{" "}
            </PokemonEmphasis>{" "}
            <PokemonEmphasis blue>
              {pokemon.stats[2].base_stat}def
            </PokemonEmphasis>
          </PokemonParagraphLarge>
        </PokemonDescription>
        <PokemonActions>
          <PokemonButton>Rename</PokemonButton>
          <PokemonButton error>Delete</PokemonButton>
        </PokemonActions>
      </PokemonContent>
    </PokemonContainer>
  );
};
