import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	Flex,
	Box,
	Spacer,
	useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { MovieTrailerPlayer } from '../components';

interface MovieDetailsModalProps {
	trailerUrl: string;
	isOpen: boolean;
	onClose: () => void;
}

const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
	trailerUrl,
	isOpen,
	onClose,
}) => {
	let size = '6xl';

	const boxWidth = useBreakpointValue({ base: 'auto', md: 'lg' });

	return (
		<>
			<Modal size={size} isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay bg='rgba(0, 0, 0, 0.5)' />
				<ModalContent boxShadow='xl' display='flex'>
					<ModalCloseButton />
					<ModalBody p={10}>
						<Flex flexDirection={{ base: 'column', md: 'row' }}>
							<Box width={boxWidth} height='auto'></Box>
							<Spacer />
							<Box width={boxWidth} height='auto'>
								<MovieTrailerPlayer trailerUrl={trailerUrl} />
							</Box>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default MovieDetailsModal;
