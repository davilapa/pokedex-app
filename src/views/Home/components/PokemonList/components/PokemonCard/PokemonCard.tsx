import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Pokemon } from "../../../../../../interfaces";
import { Link, useSearchParams } from "react-router-dom";

export const PokemonCard = ({
  pokemon,
  id,
}: {
  pokemon: Pokemon;
  id: number;
}): ReactElement => {
  const [searchParams] = useSearchParams();
  const offset = Number(searchParams.get("offset"));
  const pokemonId = id + offset + 1
  const pokemonImageId = ("000" + (pokemonId)).slice(-3);

  return (
    <Link to={`/pokemon/${pokemonId}`}>
      <Card maxW="sm" m="5px" _hover={{ boxShadow: "lg" }}>
        <CardBody position="relative">
          <Image
            borderRadius="lg"
            alt={pokemon.name}
            height="215px"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonImageId}.png`}
            width="215px"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" textAlign="center" textTransform='capitalize'>
              {pokemon.name}
            </Heading>
          </Stack>
          <Text color="#0C162F" fontSize='24px' fontWeight={600} position="absolute" top={0} right={3}>
            #{pokemonId}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};
