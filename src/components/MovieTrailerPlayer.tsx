import React, { useState } from 'react';
import { AspectRatio, Box } from '@chakra-ui/react';

import { NoTrailerAvailableCard } from './index';

interface MovieTrailerPlayerProps {
	trailerUrl: string;
}

const MovieTrailerPlayer: React.FC<MovieTrailerPlayerProps> = ({
	trailerUrl,
}) => {
	const [hasTrailerUrl] = useState(typeof trailerUrl === 'string');

	return (
		<Box mx='auto' margin='0'>
			<AspectRatio ratio={16 / 9}>
				{hasTrailerUrl ? (
					<iframe
						title='trailer'
						src={`${trailerUrl}${'?autoplay=1&mute=1'}`}
						allowFullScreen
						allow='autoplay'
						width='100%'
						height='100%'
						style={{ margin: '0', border: 'none' }}
					/>
				) : (
					<NoTrailerAvailableCard />
				)}
			</AspectRatio>
		</Box>
	);
};

export default MovieTrailerPlayer;
