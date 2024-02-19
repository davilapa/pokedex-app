import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PokemonDetails } from "../PokemonDetails";

jest.mock("../hooks/usePokemonDetail", () => ({
  ...jest.requireActual("../hooks/usePokemonDetail"),
  usePokemonDetail: jest.fn(() => ({
    pokemon: {
      id: 1,
      name: "bulbasaur",
      species: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/1/",
      },
      stats: [
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 49,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 49,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
        {
          base_stat: 65,
          effort: 1,
          stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/",
          },
        },
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/",
          },
        },
      ],
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    },
  })),
}));

jest.mock(
  "../components/PokemonEvoluations/hooks/usePokemonEvolutions.tsx",
  () => ({
    ...jest.requireActual(
      "../components/PokemonEvoluations/hooks/usePokemonEvolutions.tsx"
    ),
    usePokemonEvolutions: jest.fn(() => ({
      evolutions: ["bulbasaur", "ivysaur", "venusaur"],
    })),
  })
);

describe("PokemonDetails component", () => {
  test("renders Pokemon details correctly", () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <PokemonDetails />
      </MemoryRouter>
    );

    expect(getByAltText("bulbasaur")).toBeTruthy();
    expect(getByText("ivysaur")).toBeTruthy();
    expect(getByText("venusaur")).toBeTruthy();
    expect(getByText("speed: 45")).toBeTruthy();
  });
});
