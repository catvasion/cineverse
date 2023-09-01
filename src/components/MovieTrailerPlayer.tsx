import React, { useState } from 'react';
import { AspectRatio } from '@chakra-ui/react';

import { NoTrailerAvailableCard } from './index';

interface MovieTrailerPlayerProps {
	trailerUrl: any;
}

const MovieTrailerPlayer: React.FC<MovieTrailerPlayerProps> = ({
	trailerUrl,
}) => {
	const [hasTrailerUrl] = useState(typeof trailerUrl !== 'undefined');

	return (
		<AspectRatio w='full' ratio={16 / 9}>
			{hasTrailerUrl ? (
				<iframe
					title='trailer'
					src={`${trailerUrl}${'?autoplay=1&mute=1'}`}
					allowFullScreen
					allow='autoplay'
					width='100%'
				/>
			) : (
				<NoTrailerAvailableCard />
			)}
		</AspectRatio>
	);
};

export default MovieTrailerPlayer;
