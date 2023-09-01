import React, { ChangeEvent, KeyboardEvent } from 'react';
import {
	Input,
	IconButton,
	Spinner,
	Stack,
	InputGroup,
	InputRightElement,
	useColorMode,
	useBreakpointValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import './customInput.css';

interface SearchBarProps {
	onSearch: () => void;
	isLoading: boolean;
	searchTerm: string;
	setSearchTerm: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
	onSearch,
	isLoading,
	searchTerm,
	setSearchTerm,
}) => {
	const { colorMode } = useColorMode();

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			onSearch();
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const inputSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
	const fontSize = useBreakpointValue({ base: 'md', md: 'lg', lg: 'xl' });

	const DarkModeColor = '#7FD2FF';
	const LightModeColor = '#121B7D';
	const DarkPair = '#F0FFF0';
	const LightPair = '#444444';

	const getColor = () => {
		if (colorMode === 'light') {
			return LightModeColor;
		} else {
			return DarkModeColor;
		}
	};

	const getPair = () => {
		if (colorMode === 'light') {
			return LightPair;
		} else {
			return DarkPair;
		}
	};

	return (
		<Stack spacing={4} mb={4} display='flex' direction={'row'} px={14}>
			<InputGroup size={inputSize}>
				<Input
					borderStyle='solid'
					placeholder='Search'
					borderColor={getPair()}
					_placeholder={{ opacity: 0.9, color: getPair() }}
					size={inputSize}
					value={searchTerm}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					fontWeight='bold'
					focusBorderColor={`${getPair()}`}
					color={getColor()}
					fontSize={fontSize}
					variant='outline'
					className=' rounded-full'
				/>

				<InputRightElement>
					<IconButton
						size={inputSize}
						role='button'
						bgColor='transparent'
						_hover={{
							background: 'transparent',
						}}
						color={getPair()}
						aria-label='Search database'
						icon={isLoading ? <Spinner /> : <SearchIcon />}
						onClick={() => {
							onSearch();
						}}
						isLoading={isLoading}
					/>
				</InputRightElement>
			</InputGroup>
		</Stack>
	);
};

export default SearchBar;
