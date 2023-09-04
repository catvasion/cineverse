import React from 'react';
import { Image, useBreakpointValue } from '@chakra-ui/react';
import { MovieSearch } from '../lib/types/movies';

interface MovieCardProps {
	movie: MovieSearch;
	onMovieClick: (movieId: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onMovieClick }) => {
	const imageHeight = useBreakpointValue({
		base: '200px',
		md: '250px',
		lg: '300px',
		xl: '400px',
	});
	const imageWidth = useBreakpointValue({
		base: '135px',
		md: '170px',
		lg: '200px',
		xl: '235px',
	});
	return (
		<Image
			boxShadow='xl'
			role='button'
			borderRadius='lg'
			transition='transform 0.3s'
			h={imageHeight}
			w={imageWidth}
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
