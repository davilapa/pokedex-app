import { render } from "@testing-library/react";
import { Pagination } from "../Pagination";

describe("Pagination", () => {
  test("renders Previous and Next buttons", () => {
    const handlePreviousPokemons = jest.fn();
    const handleNextPokemons = jest.fn();
    const offset = 0;

    const { getByText } = render(
      <Pagination
        handlePreviousPokemons={handlePreviousPokemons}
        handleNextPokemons={handleNextPokemons}
        offset={offset}
      />
    );

    expect(getByText("Previous")).toBeTruthy();
    expect(getByText("Next")).toBeTruthy();
  });
});
