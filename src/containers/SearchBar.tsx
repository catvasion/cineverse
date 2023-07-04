import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  Input,
  IconButton,
  Spinner,
  Stack,
  InputGroup,
  useColorMode,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/react";
import "./customInput.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { colorMode } = useColorMode();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const inputSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const fontSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });

  const DarkModeColor = "#7FD2FF";
  const LightModeColor = "#121B7D";
  const DarkPair = "#F0FFF0";
  const LightPair = "#444444";

  const getColor = () => {
    if (colorMode === "light") {
      return LightModeColor;
    } else {
      return DarkModeColor;
    }
  };

  const getPair = () => {
    if (colorMode === "light") {
      return LightPair;
    } else {
      return DarkPair;
    }
  };

  return (
    <Stack spacing={4} mb={4} display="flex" direction={["column", "row"]}>
      <InputGroup size={inputSize}>
        <Input
          placeholder="Search"
          borderColor={getPair()}
          _placeholder={{ opacity: 0.9, color: getPair() }}
          size={inputSize}
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          fontWeight="bold"
          focusBorderColor={getPair()}
          color={getColor()}
          fontSize={fontSize}
          variant="outline"
          className="custom-input rounded-full"
        />
      </InputGroup>
      <IconButton
        role="button"
        bgColor="transparent"
        color={getPair()}
        aria-label="Search database"
        icon={isLoading ? <Spinner /> : <SearchIcon />}
        onClick={() => {
          onSearch(searchTerm);
        }}
        isLoading={isLoading}
      />
    </Stack>
  );
};

export default SearchBar;
