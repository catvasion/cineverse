import React from 'react';
import { Center, Text } from '@chakra-ui/react';
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
	);
};

export default ActionResponse;
