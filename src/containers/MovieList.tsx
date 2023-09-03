import { Box, SimpleGrid } from '@chakra-ui/react';
import { MovieCard } from '../components';
import React from 'react';
import { MovieSearch } from '../lib/types/movies';

interface MovieListProps {
	movies: MovieSearch[];
	onMovieClick: (movieId: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
	if (!movies) {
		return null;
	}
	return (
		<Box>
			<SimpleGrid
				columns={[2, 2, 3, 4, 5]}
				spacing={{ base: 4, md: 10 }}
				p={{ base: 4, md: 10 }}
			>
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
