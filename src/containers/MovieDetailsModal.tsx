import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Flex,
	Box,
	Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { MovieTrailerPlayer } from '../components';

interface MovieDetailsModalProps {
	trailerUrl: any;
	isOpen: boolean;
	onClose: any;
}

const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
	trailerUrl,
	isOpen,
	onClose,
}) => {
	let size = '6xl';

	return (
		<>
			<Modal size={size} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay bg='none' />
				<ModalContent boxShadow='xl'>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex>
							<Box w='md'>Box 1</Box>
							<Spacer />
							<Box w='lg' minW='20%'>
								<MovieTrailerPlayer trailerUrl={trailerUrl} />
							</Box>
						</Flex>
					</ModalBody>

					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default MovieDetailsModal;
