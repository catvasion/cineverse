import { Box, Center } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Header, SearchBar, MovieList } from './containers';
import { ActionResponse, MovieTrailerPlayer } from './components';
import { Movie } from './lib/types/movies';
import { MovieTrailer } from './lib/types/movieTrailer';

import { searchForMovies } from './services/omdbApi';
import { movieTrailers } from './services/movieDataBaseApi'; //
import { useApiCall } from './hooks/useApiCall';
import './custom-cursor.css';

const App: React.FC = () => {
	const [hasSearched, setHasSearched] = useState(false);
	const [areMovies, setAreMovies] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [movies, setMovies] = useState<Movie[]>([]);
	const [hasClickedMovieCard, setHasClickedMovieCard] = useState(false);
	const [trailerUrl, setTrailerUrl] = useState<MovieTrailer>({
		trailerUrl: '',
	});

	const { state: searchForMoviesState, performApiCall } = useApiCall();
	const {
		movieData: movieSearchData,
		isLoading,
		isError,
	} = searchForMoviesState;

	const {
		state: movieTrailersState,
		performApiCall: performMovieTrailersApiCall,
	} = useApiCall();
	let {
		movieData: movieTrailersData,
		isLoading: isLoadingTrailers,
		isError: isErrorTrailers,
	} = movieTrailersState;

	const searchMovies = async () => {
		await performApiCall({
			apiFunction: searchForMovies,
			args: [searchTerm],
			properties: 'Search',
			headers: '',
		});

		setHasSearched(true);
	};

	const getMovieDetails = async (movieId: string) => {
		console.log(movieId);

		await performMovieTrailersApiCall({
			apiFunction: movieTrailers,
			args: [movieId],
			properties: 'results',
			headers: '',
			movieId: movieId,
		});

		if (typeof movieTrailersData === 'object') {
			for (const key in movieTrailersData) {
				if (key === 'trailer') {
					setTrailerUrl(movieTrailersData[key] as MovieTrailer);
					console.log(trailerUrl);
					setHasClickedMovieCard(true);
				}
			}
		}
	};

	useEffect(() => {
		if (movieSearchData && movieSearchData.length > 0) {
			setAreMovies(true);
		}
		if (searchTerm.length === 0 || movieSearchData === undefined) {
			setAreMovies(false);
		}
	}, [movieSearchData]);

	const handleResponseMessage = () => {
		if (isError) {
			return 'An Error occurred during your movie search';
		}
		if (!areMovies) {
			return 'No movies found';
		}
		return '';
	};

	return (
		<Box p={4}>
			<Header />
			{hasClickedMovieCard && <MovieTrailerPlayer trailerUrl={trailerUrl} />}
			<Center h={!areMovies && !hasSearched ? '40vh' : undefined}>
				<SearchBar
					onSearch={searchMovies}
					isLoading={isLoading && !areMovies}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
			</Center>
			{(hasSearched && !areMovies && !isLoading && !movieSearchData) ||
			isError ? (
				<ActionResponse responseMessage={handleResponseMessage()} />
			) : null}
			{hasSearched && areMovies && (
				<MovieList
					onMovieClick={getMovieDetails}
					movies={movieSearchData as Movie[]}
				/>
			)}
		</Box>
	);
};

export default App;
