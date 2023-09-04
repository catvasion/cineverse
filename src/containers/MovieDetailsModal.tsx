import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	ModalHeader,
	Box,
	useBreakpointValue,
	Heading,
	Text,
	Stack,
	Flex,
} from '@chakra-ui/react';

import React from 'react';
import { MovieTrailerPlayer, MovieDetailsCard } from '../components';
import { MovieDetail } from '../lib/types/movies';

interface MovieDetailsModalProps {
	trailerUrl: string;
	movieDetails: MovieDetail;
	isOpen: boolean;
	onClose: () => void;
}
function minutesToHours(runTime: string) {
	let minutesString = runTime.replace(/[^0-9]/g, '');
	let minutesIsNumber = parseFloat(minutesString);
	const hours = Math.floor(minutesIsNumber / 60);
	const remainingMinutes = minutesIsNumber % 60;

	if (hours > 0 && remainingMinutes > 0) {
		return `${hours}h ${remainingMinutes}m`;
	} else if (hours > 0) {
		return `${hours}h`;
	} else {
		return `${remainingMinutes}m`;
	}
}

const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
	trailerUrl,
	movieDetails,
	isOpen,
	onClose,
}) => {
	const contentPadding = useBreakpointValue({ base: 2, md: 5 });

	return (
		<Modal size='6xl' isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay bg='rgba(0, 0, 0, 0.5)' />
			<ModalContent
				boxShadow='xl'
				display='flex'
				p={contentPadding}
				w='4xl'
				alignItems='center'
			>
				<Flex flexDirection='column' alignItems='flex-start'>
					<ModalHeader>
						<Stack flexDirection='row'>
							<Stack flexDirection='column'>
								<Heading>{movieDetails.Title}</Heading>
								<Stack flexDirection='row' alignItems='baseline' opacity='0.7'>
									<Text pr='10px'>{movieDetails.Year}</Text>
									<Text>·</Text>

									<Text px='10px'>{movieDetails.Rated}</Text>
									<Text>·</Text>

									<Text pl='10px'>{minutesToHours(movieDetails.Runtime)}</Text>
								</Stack>
							</Stack>
						</Stack>
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody display='flex' p={0}>
						<Stack flexDirection='column'>
							<Box w='100%' p={contentPadding}>
								<MovieTrailerPlayer trailerUrl={trailerUrl} />
							</Box>
							<MovieDetailsCard movieDetails={movieDetails} />
						</Stack>
					</ModalBody>
				</Flex>
			</ModalContent>
		</Modal>
	);
};

export default MovieDetailsModal;
