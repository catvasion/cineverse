import { Box, SimpleGrid } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { MovieCard } from "../components";
import React from "react";
import { Movie } from "../lib/types/movies";

interface MovieListProps {
  movies: Movie[];
  search: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ movies, search }) => {
  return (
    <Box>
      {movies.length > 0 && search ? (
        <SimpleGrid columns={[1, 2, 2, 3]} spacing={4}>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </SimpleGrid>
      ) : (
        <Box>
          <h2>
            No movies found <WarningIcon />
          </h2>
        </Box>
      )}
    </Box>
  );
};

export default MovieList;
