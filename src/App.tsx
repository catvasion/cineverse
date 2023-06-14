import { Box, Center, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Header, SearchBar, MovieList } from "./containers";
import { Movie } from "./lib/types/movies";

const API_URL = "http://www.omdbapi.com?apikey=c20579b4";

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searched, setSearched] = useState(false);

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data?.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
    setSearched(true);
  };

  useEffect(() => {
    // Check if there are existing movies before setting searched to true
    if (movies.length > 0) {
      setSearched(true);
    }
  }, [movies]);


  return (
    <Box p={4}>
    <Header />
    <Center h={!searched ? "60vh" : undefined}>
      <SearchBar onSearch={searchMovies} />
    </Center>
    {searched && movies.length === 0 && (
      <Center h="60vh">
        <Text fontSize="xl">No movies found.</Text>
      </Center>
    )}
    {movies.length > 0 && <MovieList movies={movies} search={searched} />}
  </Box>
  );
};

export default App;
