import { Center, Flex, Heading, Image } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { usePokemonDetail } from "./hooks/usePokemonDetail";
import { PokemonTypes } from "./components/PokemonTypes/PokemonTypes";
import { PokemonStats } from "./components/PokemonStats/PokemonStats";
import { ReactElement } from "react";
import { PokemonEvolutions } from "./components/PokemonEvoluations/PokemonEvolutions";
import { GoHomeButton } from "../../components/GoHomeButton/GoHomeButton";
import { PokemonNotFound } from "./components/PokemonNotFound/PokemonNotFound";

export const PokemonDetails = (): ReactElement => {
  const { pokemon } = usePokemonDetail();

  if (!pokemon) {
    return <PokemonNotFound />;
  }

  const pokemonId = ("000" + pokemon.id).slice(-3) ?? "1";

  return (
    <>
      <Header />
      <Flex direction="column" justifyContent="center">
        <Heading
          as="h2"
          size="3xl"
          noOfLines={1}
          textAlign="center"
          textTransform="capitalize"
        >
          {pokemon.name}
        </Heading>
        <Center>
          <Image
            borderRadius="lg"
            alt={pokemon.name}
            height="215px"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`}
            width="215px"
          />
        </Center>
        <PokemonTypes types={pokemon.types} />
        <PokemonStats stats={pokemon.stats} />
        <PokemonEvolutions pokemonId={pokemon.id} />
        <Center>
          <GoHomeButton />
        </Center>
      </Flex>
    </>
  );
};
