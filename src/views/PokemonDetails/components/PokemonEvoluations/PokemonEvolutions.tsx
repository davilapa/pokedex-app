import { Badge, Center, Flex, Heading } from "@chakra-ui/react";
import { usePokemonEvolutions } from "./hooks/usePokemonEvolutions";

export const PokemonEvolutions = ({ pokemonId }) => {
  const { evolutions } = usePokemonEvolutions(pokemonId);

  return (
    <Center flexDirection="column">
      <Heading as="h4" size="l">
        Evolutions
      </Heading>
      <Flex>
        {evolutions.map((evolution, index) => (
          <Badge
            key={index}
            variant="solid"
            backgroundColor="#0C162F"
            color="#F1BD35"
            margin="10px"
          >
            {evolution}
          </Badge>
        ))}
      </Flex>
    </Center>
  );
};
