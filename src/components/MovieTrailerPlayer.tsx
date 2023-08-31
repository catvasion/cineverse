import React from 'react';
import { AspectRatio } from '@chakra-ui/react';

interface MovieTrailerPlayerProps {
	trailerUrl: any;
}

const MovieTrailerPlayer: React.FC<MovieTrailerPlayerProps> = ({
	trailerUrl,
}) => {
	return (
		<AspectRatio w='full' ratio={1}>
			<iframe
				title='naruto'
				src={`${trailerUrl}${'?autoplay=1&mute=1'}`}
				allowFullScreen
				allow='autoplay'
			/>
		</AspectRatio>
	);
};

export default MovieTrailerPlayer;
