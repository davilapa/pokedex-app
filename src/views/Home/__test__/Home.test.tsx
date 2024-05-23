import { render } from "@testing-library/react";
import Home from "../Home";
import { MemoryRouter, useNavigate } from "react-router-dom";

jest.mock("../hooks/usePokemons.tsx", () => ({
  usePokemons: jest.fn(() => ({
    pokemons: [
      { name: "Pikachu", url: "pokeapi.com/pikachu" },
      { name: "Charmander", url: "pokeapi.com/charmander" },
      { name: "Bulbasaur", url: "pokeapi.com/bulbasaur" },
    ],
    handlePreviousPokemons: jest.fn(),
    handleNextPokemons: jest.fn(),
    offset: 0,
  })),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: jest.fn(() => [{ get: jest.fn() }]),
  useNavigate: jest.fn(),
}));

describe("Home", () => {
  test("renders components correctly", () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(getByText("Pokedex App")).toBeTruthy();
    expect(getByPlaceholderText("Search by name or id")).toBeTruthy();
    expect(getByText("Pikachu")).toBeTruthy();
    expect(getByText("Charmander")).toBeTruthy();
    expect(getByText("Bulbasaur")).toBeTruthy();
    expect(getByText("Previous")).toBeTruthy();
    expect(getByText("Next")).toBeTruthy();
  });
});
