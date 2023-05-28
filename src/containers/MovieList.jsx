import { Box, SimpleGrid } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { MovieCard } from "../components";

const MovieList = ({ movies }) => {
  return (
    <Box>
      {movies?.length > 0 ? (
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
