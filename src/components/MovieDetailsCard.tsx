import React from 'react';
import { Card, CardBody, Text, Heading, Box, Divider } from '@chakra-ui/react';
import { MovieDetail } from '../lib/types/movies';

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

const MovieDetailsCard: React.FC<MovieDetailsCardProps> = ({
	movieDetails,
}) => {
	return (
		<Card boxShadow='none'>
			<CardBody display='flex' flexDirection='column'>
				<Text mb='10px'>{movieDetails.Plot}</Text>
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
