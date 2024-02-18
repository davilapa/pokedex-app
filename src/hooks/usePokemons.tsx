import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces";
import { useSearchParams } from "react-router-dom";
import {
  OFFSET_MINIMUM,
  OFFSET_VARIATION,
  POKEMONS_LIMIT,
  POKEMONS_OFFSET_LIMIT,
} from "../contants";

export const usePokemons = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    offset: `${OFFSET_MINIMUM}`,
    limit: `${OFFSET_VARIATION}`,
  });

  const [offset, setOffset] = useState(
    Number(searchParams.get("offset")) || OFFSET_MINIMUM
  );
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setOffset(Number(searchParams.get("offset")));
  }, [searchParams]);

  useEffect(() => {
    getPokemons(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`);
  }, [offset]);

  const getPokemons = async (url: string) => {
    try {
      const pokemonsReponse = await fetch(url);
      const formattedPokemons = await pokemonsReponse.json();
      setPokemons(formattedPokemons.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePreviousPokemons = () => {
    const newOffset =
      offset > OFFSET_MINIMUM
        ? `${offset - OFFSET_VARIATION}`
        : `${OFFSET_MINIMUM}`;
    setSearchParams({ offset: newOffset });
  };

  const handleNextPokemons = () => {
    const newOffset =
      offset < POKEMONS_LIMIT
        ? `${offset + OFFSET_VARIATION}`
        : `${POKEMONS_OFFSET_LIMIT}`;
    setSearchParams({ offset: newOffset });
  };

  return {
    pokemons,
    handlePreviousPokemons,
    handleNextPokemons,
    offset,
  };
};
