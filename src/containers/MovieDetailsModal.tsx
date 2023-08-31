import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Flex,
	Box,
	Spacer,
	UseDisclosureProps,
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
							<Box w='lg'>
								Trailer
								<MovieTrailerPlayer trailerUrl={trailerUrl} />
							</Box>
						</Flex>
					</ModalBody>

					<ModalFooter>
						{/* <Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant='ghost'>Secondary Action</Button> */}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default MovieDetailsModal;
