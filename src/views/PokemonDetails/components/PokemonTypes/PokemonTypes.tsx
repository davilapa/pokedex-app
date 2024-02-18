import { Badge, Center } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Type } from "../../interfaces";

export const PokemonTypes = ({ types }: { types: Type[] }): ReactElement => {
  return (
    <section>
      <Center flexWrap="wrap">
        {types.map((type) => (
          <Badge
            key={type.slot}
            variant="solid"
            backgroundColor="#F1BD35"
            color="#0C162F"
            margin="10px"
          >
            {type.type.name}
          </Badge>
        ))}
      </Center>
    </section>
  );
};
