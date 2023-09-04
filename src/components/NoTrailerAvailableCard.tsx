import React from 'react';
import {
	Image,
	Card,
	CardBody,
	Box,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { youtube_icon } from '../assets/';

const NoTrailerAvailableCard = () => {
	const cardWidth = useBreakpointValue({ base: '100%', md: 'lg', lg: 'lg' });
	const cardHeight = useBreakpointValue({ base: 'auto', md: 'lg', lg: 'lg' });
	const cardPadding = useBreakpointValue({ base: 4, md: 10 });

	return (
		<Card>
			<CardBody>
				<Box
					filter='grayscale(100%)'
					opacity='.6'
					backdropFilter='auto'
					backdropContrast='60%'
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					width={cardWidth}
					height={cardHeight}
					p={cardPadding}
				>
					<Text mb='10px'>Trailer Not Available.</Text>
					<Image
						src={youtube_icon}
						width='100px'
						filter='auto'
						brightness='180%'
					/>
				</Box>
			</CardBody>
		</Card>
	);
};

export default NoTrailerAvailableCard;
