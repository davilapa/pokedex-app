import { PokemonList } from "./components/PokemonList/PokemonList";
import { usePokemons } from "./hooks/usePokemons";
import { Pagination } from "./components/Pagination/Pagination";
import { Header } from "../../components/Header/Header";

function Home() {
  const { pokemons, handlePreviousPokemons, handleNextPokemons, offset } =
    usePokemons();

  return (
    <>
      <Header />
      <PokemonList {...{ pokemons }} />
      <Pagination {...{ handlePreviousPokemons, handleNextPokemons, offset }} />
    </>
  );
}

export default Home;
