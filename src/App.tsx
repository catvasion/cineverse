import { Box, Center } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Header, SearchBar, MovieList, MovieDetailsModal } from './containers';
import { ActionResponse } from './components';
import { MovieSearch, MovieDetail } from './lib/types/movies';
import { MovieTrailerDetail } from './lib/types/movieTrailer';

import { searchForMovies, fetchMovieDetailsById } from './services/omdbApi';
import { movieTrailers } from './services/movieDataBaseApi'; //
import { useApiCall } from './hooks/useApiCall';
import './custom-cursor.css';

const App: React.FC = () => {
	const [hasSearched, setHasSearched] = useState(false);
	const [areMovies, setAreMovies] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [hasClickedMovieCard, setHasClickedMovieCard] = useState(false);

	const isMovieSearch = (
		data: MovieSearch[] | MovieTrailerDetail | MovieDetail
	): data is MovieSearch[] => {
		return Array.isArray(data) && data.length > 0;
	};

	const isMovieTrailerDetail = (
		data: MovieSearch[] | MovieTrailerDetail | MovieDetail
	): data is MovieTrailerDetail => {
		return (
			typeof data === 'object' &&
			'results' in data &&
			typeof data.results === 'object'
		);
	};

	const isMovieDetail = (
		data: MovieSearch[] | MovieTrailerDetail | MovieDetail
	): data is MovieDetail => {
		return (
			typeof data === 'object' &&
			'Actors' in data &&
			typeof data.Actors === 'string'
		);
	};

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

	const {
		state: fetchMovieDetailsByIdState,
		performApiCall: performFetchMovieDetailsByIdApiCall,
	} = useApiCall();
	let {
		movieData: fetchMovieDetailsByIdData,
		isLoading: isLoadingMovieData,
		isError: isErrorMovieData,
	} = fetchMovieDetailsByIdState;

	const searchMovies = async () => {
		await performApiCall({
			apiFunction: searchForMovies,
			args: [searchTerm],
			properties: ['Search'],
			headers: '',
		});

		setHasSearched(true);
	};

	const getMovieDetails = async (movieId: string) => {
		await Promise.all([
			performMovieTrailersApiCall({
				apiFunction: movieTrailers,
				args: [movieId],
				headers: '',
				movieId: movieId,
			}),
			performFetchMovieDetailsByIdApiCall({
				apiFunction: fetchMovieDetailsById,
				args: [movieId],
				headers: '',
			}),
		]);

		setHasClickedMovieCard(true);
	};

	useEffect(() => {
		if (isMovieSearch(movieSearchData)) {
			if (movieSearchData && movieSearchData.length > 0) {
				setAreMovies(true);
			}
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
		if (isErrorTrailers) {
			return 'An Error occured fetching movie details and trailer.';
		}
		return '';
	};

	return (
		<Box p={4}>
			<Header />
			{isErrorTrailers && (
				<ActionResponse responseMessage={handleResponseMessage()} />
			)}

			{hasClickedMovieCard &&
				isMovieTrailerDetail(movieTrailersData) &&
				isMovieDetail(fetchMovieDetailsByIdData) && (
					<div>
						<MovieDetailsModal
							onClose={() => setHasClickedMovieCard(false)}
							isOpen={true}
							trailerUrl={movieTrailersData.results.trailer}
							movieDetails={fetchMovieDetailsByIdData}
						/>
					</div>
				)}
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
			{hasSearched && areMovies && isMovieSearch(movieSearchData) && (
				<MovieList onMovieClick={getMovieDetails} movies={movieSearchData} />
			)}
		</Box>
	);
};

export default App;
