import { Heading } from "@chakra-ui/react";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { usePokemons } from "./hooks/usePokemons";
import { Pagination } from "./components/Pagination/Pagination";

function App() {
   const { pokemons, handlePreviousPokemons, handleNextPokemons, offset } = usePokemons()

  return (
    <>
      <Heading backgroundColor='#0C162F' color='#F1BD35' textAlign="center" paddingY='10px'>Consubanco Pokedex</Heading>
      <PokemonList {...{ pokemons }} />
      <Pagination {...{ handlePreviousPokemons, handleNextPokemons, offset }} />
    </>
  );
}

export default App;
