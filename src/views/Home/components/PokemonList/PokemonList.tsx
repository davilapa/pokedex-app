import { Grid } from "@chakra-ui/react";
import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import { Pokemon } from "../../../../interfaces";
import { ReactElement } from "react";

export const PokemonList = ({
  pokemons,
}: {
  pokemons: Pokemon[];
}): ReactElement => {
  return (
    <Grid
      templateColumns="repeat(auto-fill, 270px)"
      gap={6}
      justifyContent="center"
      marginY='20px'
    >
      {pokemons.map((pokemon, index) => (
        <PokemonCard
          key={`${pokemon.name}${index}`}
          pokemon={pokemon}
          id={index}
        />
      ))}
    </Grid>
  );
};
