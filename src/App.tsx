import { Heading } from "@chakra-ui/react";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { usePokemon } from "./hooks/usePokemon";

function App() {
   const { pokemons } = usePokemon()

  return (
    <>
      <Heading backgroundColor='#0C162F' color='#F1BD35' textAlign="center" paddingY='10px'>Consubanco Pokedex</Heading>
      <PokemonList pokemons={pokemons} />
    </>
  );
}

export default App;
