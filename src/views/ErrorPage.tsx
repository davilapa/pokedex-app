import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex
      id="error-page"
      alignContent="center"
      flexFlow="column"
      justifyContent="center"
      padding="248px"
    >
      <Heading textAlign="center">Oops!</Heading>
      <Text textAlign="center">Sorry, an unexpected error has occurred.</Text>
      <Text textAlign="center">
        <i>{error.statusText || error.message}</i>
      </Text>
      <Center>
        <Link to="/">
          <Button variant="solid" backgroundColor="#F1BD35" color="#0C162F">
            Go Home
          </Button>
        </Link>
      </Center>
    </Flex>
  );
}
