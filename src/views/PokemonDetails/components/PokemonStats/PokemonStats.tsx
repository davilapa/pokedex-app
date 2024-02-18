import { Center, Progress, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { Stat } from "../../interfaces";

export const PokemonStats = ({ stats }: { stats: Stat[] }): ReactElement => {
  return (
    <Center>
      <Stack spacing={2} width="250px">
        {stats.map((stat) => (
          <Stack
            key={`${stat.stat.name}-${stat.base_stat}`}
            position="relative"
          >
            <Text
              color={"#0C162F"}
              position="absolute"
              zIndex={1}
              bottom={0}
              left="4px"
              fontSize="12px"
              fontWeight={800}
            >
              {`${stat.stat.name}: ${stat.base_stat}`}
            </Text>
            <Progress colorScheme="yellow" size="lg" value={stat.base_stat} />
          </Stack>
        ))}
      </Stack>
    </Center>
  );
};
