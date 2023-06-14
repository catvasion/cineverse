import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Box, Input, IconButton, Spinner, HStack, InputGroup, InputRightElement, Select, useColorMode } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/react";
// import { ToggleInputBorder } from "../components";
import "./customInput.css"

interface SearchBarProps {
  onSearch: (searchTerm: string, filterOption: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const { colorMode } = useColorMode()

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchTerm, filterOption);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setFilterOption(event.target.value)
  // }

  const inputSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });



const DarkModeColor = "#7FD2FF"
const LightModeColor = "#121B7D"

const getColor = () => {
  if (colorMode === 'light') {
      return (LightModeColor)
  } else {
      return DarkModeColor
  }
}
  

  return (
    <HStack spacing={4} mb={4} display='flex'>
      <InputGroup size={inputSize}>
        <Input
          placeholder="Search"
          // _placeholder={{ opacity: 0.7, color: 'inherit' }}
          size={inputSize}
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          fontWeight="bold"
          focusBorderColor={getColor()}
          color={getColor()}
        />
        
        </InputGroup>
        <IconButton  
              
          aria-label="Search database"
          icon={isLoading ? <Spinner /> : <SearchIcon />}
          onClick={() => {
            onSearch(searchTerm, filterOption);
          }}
        />
      
    </HStack>
   
  );
};
export default SearchBar;