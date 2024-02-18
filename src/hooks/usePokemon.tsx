import { useEffect, useState } from "react"
import { Pokemon } from "../interfaces"

export const usePokemon = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    
    const getPokemons = async () => {
        try {
          const pokemonsReponse = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const formattedPokemons = await pokemonsReponse.json()
            setPokemons(formattedPokemons.results)
            console.log(formattedPokemons);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=> {
        getPokemons()
    }, [])

  return {
    pokemons
  }
}
