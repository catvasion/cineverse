import React from 'react';
import {
	Alert,
	AlertTitle,
	Box,
	AlertIcon,
	Center,
	Text,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

interface ActionResponseProps {
	responseMessage: string;
}
const ActionResponse: React.FC<ActionResponseProps> = ({ responseMessage }) => {
	return (
		<Center h='60vh'>
			<Text fontSize='2xl'>
				{responseMessage} <WarningIcon />
			</Text>
		</Center>
		// <Box
		// 	position='fixed'
		// 	top='0'
		// 	left='0'
		// 	width='100vw'
		// 	height='100vh'
		// 	backgroundColor='rgba(0,0,0,0.2)'
		// >
		// 	<Box
		// 		display='flex'
		// 		position='fixed'
		// 		top='0'
		// 		left='0'
		// 		width='100vw'
		// 		height='100vh'
		// 		alignItems='center'
		// 		justifyContent='center'
		// 		z-index='1'
		// 	>
		// 		<Alert
		// 			status='error'
		// 			width='60%'
		// 			height='20%'
		// 			display='flex'
		// 			flexDirection={{ base: 'column', md: 'row' }}
		// 			justifyContent='center'
		// 			borderRadius='lg'
		// 			border='solid'
		// 			borderColor='#e53e3e'
		// 			bgColor='rgb(255 139 139 / 95%)'
		// 			z-index='2'
		// 		>
		// 			<AlertIcon color='none' />
		// 			<AlertTitle>{responseMessage}</AlertTitle>
		// 		</Alert>
		// 	</Box>
		// </Box>
	);
};

export default ActionResponse;
