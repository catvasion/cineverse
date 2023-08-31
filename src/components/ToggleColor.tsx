import { Box, useColorMode, Button } from '@chakra-ui/react';
import React from 'react';

const ToggleColor: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	const { colorMode, toggleColorMode } = useColorMode();

	const handleToggleColorMode = () => {
		toggleColorMode();
		onClose();
	};

	return (
		<Box>
			<Button onClick={handleToggleColorMode}>
				{colorMode === 'light' ? 'Dark' : 'Light'} Mode
			</Button>
		</Box>
	);
};

export default ToggleColor;
