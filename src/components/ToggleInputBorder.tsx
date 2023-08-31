import { useColorMode } from '@chakra-ui/react';
import React, { FC } from 'react';

interface ToggleLogoProps {
	focusBorderColor: string;
}

const ToggleInputBorder: FC<ToggleLogoProps> = () => {
	const { colorMode } = useColorMode();

	const DarkModeCocusBorderColor = '#7FD2FF';
	const LightModeCocusBorderColor = '#121B7D';

	const getBoderColor = () => {
		if (colorMode === 'light') {
			return LightModeCocusBorderColor;
		} else {
			return DarkModeCocusBorderColor;
		}
	};
	return <>focusBorderColor={getBoderColor()}</>;
};

export default ToggleInputBorder;
