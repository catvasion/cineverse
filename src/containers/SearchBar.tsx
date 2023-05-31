import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Box, Input, IconButton, Spinner, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const inputSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  return (
    <HStack spacing={4} mb={4}>
      <Input
        placeholder="Search for a Movie"
        size={inputSize}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <IconButton
        aria-label="Search database"
        icon={isLoading ? <Spinner /> : <SearchIcon />}
        onClick={() => {
          onSearch(searchTerm);
        }}
      />
    </HStack>
  );
};

export default SearchBar;
