import { Box, SimpleGrid } from '@chakra-ui/react';
import { MovieCard } from '../components';
import React from 'react';
import { Movie } from '../lib/types/movies';

interface MovieListProps {
	movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
	if (!movies) {
		return null;
	}
	return (
		<Box>
			<SimpleGrid columns={[1, 2, 2, 3]} spacing={10} p={4}>
				{movies.map((movie) => (
					<MovieCard key={movie.imdbID} movie={movie} />
				))}
			</SimpleGrid>
		</Box>
	);
};

export default MovieList;
