import React from 'react';
import { Image } from '@chakra-ui/react';
import { Movie } from '../lib/types/movies';

interface MovieCardProps {
	movie: Movie;
	onMovieClick: (movieId: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onMovieClick }) => {
	return (
		<Image
			boxShadow='xl'
			role='button'
			borderRadius='lg'
			transition='transform 0.3s'
			_hover={{
				outline: 'none',
				boxShadow: '2xl',
				transform: 'scale(1.1)',
			}}
			src={
				movie.Poster !== 'N/A'
					? movie.Poster
					: 'https://via.placeholder.com/400'
			}
			alt={`movie poster of ${movie.Title}`}
			onClick={() => {
				onMovieClick(movie.imdbID);
			}}
		/>
	);
};

export default MovieCard;
