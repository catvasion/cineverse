import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Box, Input, IconButton, Spinner, HStack, InputGroup, InputRightElement, Select } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/react";

interface SearchBarProps {
  onSearch: (searchTerm: string, filterOption: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchTerm, filterOption);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value)
  }

  const inputSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  
  const selectPlaceholder = inputSize === 'sm' ?  '' : "Filter Options"

  return (
    <HStack spacing={4} mb={4}>
      <InputGroup size={inputSize}>
        <Input
          placeholder="Search for a Movie"
          size={inputSize}
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <InputRightElement width='auto'>
         <Select
            size={inputSize}
            value={filterOption}
            onChange={handleFilterChange}
            placeholder={selectPlaceholder}
            variant='unstyled' 
          >
          <option value=''></option>
          <option value='year'>Year</option>
          <option value='type'>Type</option>
          </Select>   
        </InputRightElement>
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
