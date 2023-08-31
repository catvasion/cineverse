import { Box, SimpleGrid } from '@chakra-ui/react';
import { MovieCard } from '../components';
import React from 'react';
import { Movie } from '../lib/types/movies';

interface MovieListProps {
	movies: Movie[];
	onMovieClick: (movieId: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
	if (!movies) {
		return null;
	}
	return (
		<Box>
			<SimpleGrid columns={[1, 2, 2, 3]} spacing={10} p={4}>
				{movies.map((movie) => (
					<MovieCard
						key={movie.imdbID}
						movie={movie}
						onMovieClick={onMovieClick}
					/>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default MovieList;
