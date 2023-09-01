import React from 'react';
import { Image, Card, CardBody, Box, Text } from '@chakra-ui/react';
import { youtube_icon } from '../assets/';

const NoTrailerAvailableCard = () => {
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
					width='lg'
					height='lg'
					p='10'
				>
					<Text mb='10px'>Trailer Video Not Available.</Text>
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
