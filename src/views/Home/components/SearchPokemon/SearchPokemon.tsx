import { Center, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useSearchPokemon } from "./hooks/useSearchPokemon";

export const SearchPokemon = () => {
  const { searchTerm, setSearchTerm, handleEnterKeyPress, handleSearch } =
    useSearchPokemon();

  return (
    <Center marginY="20px">
      <InputGroup width="270px">
        <Input
          placeholder="Search by name or id"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleEnterKeyPress}
          type="search"
        />
        <InputRightElement>
          <SearchIcon color="#0C162F" onClick={handleSearch} data-testid='search-icon' />
        </InputRightElement>
      </InputGroup>
    </Center>
  );
};
