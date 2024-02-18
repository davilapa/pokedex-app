import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonDetails } from "../interfaces";

export const usePokemonDetail = () => {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemon();
  }, [id]);

  return {
    pokemon,
  };
};
