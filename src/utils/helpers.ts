import { Chain } from "../views/PokemonDetails/interfaces";

export const getEvolutionsRecursive = (chain: Chain) => {
  const evolutions: string[] = [];

  const recursiveEvolutions = (chain: Chain) => {
    evolutions.push(chain.species.name);

    if (chain.evolves_to.length > 0) {
      recursiveEvolutions(chain.evolves_to[0]);
    }
  };

  recursiveEvolutions(chain);

  return evolutions;
};
