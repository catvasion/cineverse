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
			<ModalContent boxShadow='xl' display='flex' p={contentPadding}>
				<ModalHeader>
					<Heading>{movieDetails.Title}</Heading>
					<Stack flexDirection='row' alignItems='baseline' opacity={0.4}>
						<Text pr='10px'>{movieDetails.Year}</Text>
						<Text>·</Text>

						<Text px='10px'>{movieDetails.Rated}</Text>
						<Text>·</Text>

						<Text pl='10px'>{movieDetails.Runtime}</Text>
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
			</ModalContent>
		</Modal>
	);
};

export default MovieDetailsModal;
