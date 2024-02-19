import { render, fireEvent } from "@testing-library/react";
import { SearchPokemon } from "../SearchPokemon";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("SearchPokemon component", () => {
  test("calls handleSearch when SearchIcon is clicked", () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    const { getByPlaceholderText, getByTestId } = render(<SearchPokemon />);

    const inputElement = getByPlaceholderText(
      "Search by name or id"
    ) as HTMLInputElement;
    const searchIcon = getByTestId("search-icon");
    
    fireEvent.change(inputElement, { target: { value: "Pikachu" } });

    fireEvent.click(searchIcon);

    expect(navigate).toHaveBeenCalledTimes(1);
  });

  test("updates searchTerm when input value changes", () => {
    const { getByPlaceholderText } = render(<SearchPokemon />);
    const inputElement = getByPlaceholderText(
      "Search by name or id"
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "Pikachu" } });

    expect(inputElement.value).toBe("Pikachu");
  });

  test("updates searchTerm when input value changes", () => {
    const { getByPlaceholderText } = render(<SearchPokemon />);
    const inputElement = getByPlaceholderText(
      "Search by name or id"
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "Pikachu" } });

    expect(inputElement.value).toBe("Pikachu");
  });

});
