import { Center, Flex, Heading, Text } from '@chakra-ui/react'
import { GoHomeButton } from '../../../../components/GoHomeButton/GoHomeButton'

export const PokemonNotFound = () => {
  return (
    <Flex
      id="error-page"
      alignContent="center"
      flexFlow="column"
      justifyContent="center"
      padding="248px"
    >
      <Heading textAlign="center">Oops! Sorry</Heading>
      <Text textAlign="center">Pokemon Not Found, please try Again!</Text>
      
      <Center>
          <GoHomeButton />
        </Center>
    </Flex>
  )
}
