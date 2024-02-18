import { useEffect, useState } from "react";
import { getEvolutionsRecursive } from "../../../../../utils/helpers";

export const usePokemonEvolutions = (pokemonId: string) => {
  const [evolutions, setEvolutions] = useState<string[]>([]);

  const fetchPokemonEvolutions = async (pokemonId: string) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
    );
    const data = await response.json();
    const evolutionChainUrl = data.evolution_chain.url;

    const evolutionChainResponse = await fetch(evolutionChainUrl);
    const evolutionChainData = await evolutionChainResponse.json();

    const pokemonEvolutions = getEvolutionsRecursive(evolutionChainData.chain);
    setEvolutions(pokemonEvolutions);
  };

  useEffect(() => {
    fetchPokemonEvolutions(pokemonId);
  }, [pokemonId]);

  return {
    evolutions,
  };
};
