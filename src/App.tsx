import { Heading } from "@chakra-ui/react";
import { PokemonList } from "./components/PokemonList/PokemonList";

function App() {
  return (
    <>
      <Heading textAlign="center">Consubanco Pokedex</Heading>
      <PokemonList />
    </>
  );
}

export default App;
