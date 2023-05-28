import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Header, SearchBar, MovieList } from "./containers";
// import SearchBar from "./SearchBar";
// import MovieList from "./MovieList";

const API_URL = "http://www.omdbapi.com?apikey=c20579b4";

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <ChakraProvider>
      <Box p={4}>
        <Header />
        <SearchBar onSearch={searchMovies} />
        <MovieList movies={movies} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
