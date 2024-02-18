import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Pokemon } from "../../interfaces";

export const PokemonCard = ({
  pokemon,
  id,
}: {
  pokemon: Pokemon;
  id: number;
}): ReactElement => {
  const pokemonId = ('000' + (id + 1)).slice(-3);

  return (
    <Card maxW="sm" m='5px'>
      <CardBody position='relative'>
        <Image
          borderRadius="lg"
          alt={pokemon.name}
          height='215px'
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`}
          width='215px'
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" textAlign='center'>{pokemon.name}</Heading>
        </Stack>
        <Text position='absolute' top={0} right={3}>#{pokemonId}</Text>
      </CardBody>
      <CardFooter justifyContent='center'>
        <ButtonGroup spacing="2">
          <Button variant="solid" backgroundColor="#F1BD35" color='#0C162F'>
            Detail
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
