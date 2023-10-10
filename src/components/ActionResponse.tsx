import React from 'react';
import { Alert, AlertTitle, Box, AlertIcon } from '@chakra-ui/react';

interface ActionResponseProps {
	responseMessage: string;
}
const ActionResponse: React.FC<ActionResponseProps> = ({ responseMessage }) => {
	return (
		<Box
			position='fixed'
			top='0'
			left='0'
			width='100vw'
			height='100vh'
			backgroundColor='rgba(0,0,0,0.2)'
		>
			<Box
				display='block'
				position='fixed'
				top='25%'
				left='25%'
				width='100%'
				height='100%'
				z-index='1'
			>
				<Alert
					status='error'
					width='60%'
					display='flex'
					flexDirection={{ base: 'column', md: 'row' }}
					justifyContent='center'
					borderRadius='lg'
					border='solid'
					borderColor='#e53e3e'
				>
					<AlertIcon />
					<AlertTitle>{responseMessage}</AlertTitle>
				</Alert>
			</Box>
		</Box>
	);
};

export default ActionResponse;
