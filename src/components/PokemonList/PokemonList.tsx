import { Grid } from "@chakra-ui/react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Pokemon } from "../../interfaces";

export const PokemonList = ({ pokemons }: { pokemons: Pokemon[]}) => {
  return (
    <Grid templateColumns='repeat(auto-fill, 320px)' gap={6} justifyContent='center'>
        {pokemons.map((pokemon, index) => (
            <PokemonCard key={`${pokemon.name}${index}`} pokemon={pokemon} id={index} />
        ))}
    </Grid>
  );
};
