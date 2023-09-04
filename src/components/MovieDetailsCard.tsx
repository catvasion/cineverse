import React from 'react';
import {
	Card,
	CardBody,
	Text,
	Heading,
	Box,
	Divider,
	Stack,
} from '@chakra-ui/react';
import { MovieDetail } from '../lib/types/movies';
import { StarIcon } from '@chakra-ui/icons';

interface MovieDetailsCardProps {
	movieDetails: MovieDetail;
}

const MovieDetailBoxInCard: React.FC<{ type: string; detail: string }> = ({
	type,
	detail,
}) => {
	return (
		<Box
			display='flex'
			flexDirection={{ base: 'column', sm: 'row' }}
			alignItems='baseline'
			justifyContent='start'
			my={3}
		>
			<Heading size='xs' textTransform='uppercase' mr='5'>
				{type}
			</Heading>
			<Text pt='2' fontSize='sm'>
				{detail}
			</Text>
		</Box>
	);
};
const roundRating = (rating: string) => {
	const parsedRating = parseFloat(rating);
	if (isNaN(parsedRating)) {
		return 'N/A';
	}

	const rounded: number = Math.round(parsedRating);
	return `${rounded} K`;
};

const removeCommas = (genres: string) => genres.replace(/,/g, ' · ');

const MovieDetailsCard: React.FC<MovieDetailsCardProps> = ({
	movieDetails,
}) => {
	return (
		<Card boxShadow='none'>
			<CardBody display='flex' flexDirection='column'>
				<Text mb='10px'>{removeCommas(movieDetails.Genre)}</Text>
				<Text fontWeight='bold' mb='10px'>
					{movieDetails.Plot}
				</Text>
				<Stack flexDirection='row' alignItems='baseline' mb={3}>
					<Text opacity='.7' pr='10px'>
						IMDb RATING
					</Text>
					<StarIcon color='#F5C518' />
					<Text pl='10px'>{movieDetails.imdbRating}</Text>
					<Text opacity='.7' pr='10px'>
						/10
					</Text>
					<Text opacity='.7' pr='10px'>
						·
					</Text>
					<Text opacity='.7'>{roundRating(movieDetails.imdbVotes)}</Text>
				</Stack>
				<Divider />
				<MovieDetailBoxInCard type='Director' detail={movieDetails.Director} />
				<Divider />
				<MovieDetailBoxInCard type='Writers' detail={movieDetails.Writer} />
				<Divider />
				<MovieDetailBoxInCard type='Stars' detail={movieDetails.Actors} />
			</CardBody>
		</Card>
	);
};

export default MovieDetailsCard;
