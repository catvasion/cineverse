import React from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Text,
	VStack,
	Image,
} from '@chakra-ui/react';
import { Movie } from '../lib/types/movies';

interface MovieCardProps {
	movie: Movie;
	onMovieClick: (movieId: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onMovieClick }) => {
	return (
		<Card boxShadow='xl'>
			<VStack spacing={2}>
				<CardHeader>{movie.Year}</CardHeader>

				<CardBody>
					<Image
						h='50vh'
						borderRadius='lg'
						src={
							movie.Poster !== 'N/A'
								? movie.Poster
								: 'https://via.placeholder.com/400'
						}
						alt={movie.Title}
						onClick={() => {
							onMovieClick(movie.imdbID);
						}}
					/>
				</CardBody>
				<CardFooter>
					<VStack>
						<Text textTransform='uppercase'>{movie.Type}</Text>
						<Text noOfLines={2} fontSize='l' as='b'>
							{movie.Title}
						</Text>
					</VStack>
				</CardFooter>
			</VStack>
		</Card>
	);
};

export default MovieCard;
