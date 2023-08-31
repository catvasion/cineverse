import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	Button,
	useDisclosure,
	useBreakpointValue,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { ToggleColor } from '../components';

const PreferencesFlyout = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const buttonSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
	const iconSize = useBreakpointValue({ base: '14px', md: '20px', lg: '24px' });

	return (
		<>
			<Button colorScheme='blue' size={buttonSize} onClick={onOpen}>
				<SettingsIcon role='button' boxSize={iconSize} />
			</Button>

			<Drawer placement='right' onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth='1px'>Preferences</DrawerHeader>
					<DrawerBody>
						<ToggleColor onClose={onClose} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default PreferencesFlyout;
