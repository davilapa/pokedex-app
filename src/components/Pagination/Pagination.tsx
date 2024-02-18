import { Button, Flex } from "@chakra-ui/react";
import { OFFSET_MINIMUM, POKEMONS_OFFSET_LIMIT } from "../../contants";
import { ReactElement } from "react";

export const Pagination = ({
  handlePreviousPokemons,
  handleNextPokemons,
  offset,
}: {
  handlePreviousPokemons: () => void;
  handleNextPokemons: () => void;
  offset: number;
}): ReactElement => {
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Button
        variant="solid"
        color="#F1BD35"
        backgroundColor="#0C162F"
        margin="10px"
        width="40%"
        _hover={{
          backgroundColor: "#0C162F",
        }}
        onClick={handlePreviousPokemons}
        isDisabled={offset === OFFSET_MINIMUM}
      >
        Previous
      </Button>
      <Button
        variant="solid"
        color="#F1BD35"
        backgroundColor="#0C162F"
        margin="10px"
        width="40%"
        _hover={{
          backgroundColor: "#0C162F",
        }}
        onClick={handleNextPokemons}
        isDisabled={offset === POKEMONS_OFFSET_LIMIT}
      >
        Next
      </Button>
    </Flex>
  );
};
