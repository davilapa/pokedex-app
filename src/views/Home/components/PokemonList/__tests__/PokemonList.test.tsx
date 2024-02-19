import { render } from "@testing-library/react";
import { PokemonList } from "../PokemonList";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: jest.fn(() => [{ get: jest.fn() }]),
}));

describe("PokemonList", () => {
  test("renders list of Pokemon correctly", () => {
    const mockPokemons = [
      { name: "Pikachu", url: "pokeapi.com/pikachu" },
      { name: "Charmander", url: "pokeapi.com/charmander" },
      { name: "Bulbasaur", url: "pokeapi.com/bulbasaur" },
    ];

    const { getByText } = render(
      <MemoryRouter>
        <PokemonList pokemons={mockPokemons} />
      </MemoryRouter>
    );

    expect(getByText("Pikachu")).toBeTruthy();
    expect(getByText("Charmander")).toBeTruthy();
    expect(getByText("Bulbasaur")).toBeTruthy();
  });
});
