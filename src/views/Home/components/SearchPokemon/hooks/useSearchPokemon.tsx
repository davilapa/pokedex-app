import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearchPokemon = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const cleanedSearchTerm = searchTerm.trim().toLowerCase();
    navigate(`/pokemon/${cleanedSearchTerm}`);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return {
    searchTerm,
    setSearchTerm,
    handleEnterKeyPress,
    handleSearch,
  };
};
