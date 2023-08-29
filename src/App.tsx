import { Box, Button, Center, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Header, SearchBar, MovieList } from './containers';
import { ActionResponse } from './components';
import { Movie } from './lib/types/movies';

import { searchForMovies } from './services/omdbApi';
import { useApiCall } from './hooks/useApiCall';
import './custom-cursor.css';

const App: React.FC = () => {
	const [hasSearched, setHasSearched] = useState(false);
	const [areMovies, setAreMovies] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [movies, setMovies] = useState<Movie[]>([]);

	const { state: searchForMoviesState, performApiCall } = useApiCall();
	const { movieData, isLoading, isError } = searchForMoviesState;

	const searchMovies = async () => {
		await performApiCall({
			apiFunction: searchForMovies,
			args: [searchTerm],
			properties: 'Search',
		});
		setHasSearched(true);
	};

	useEffect(() => {
		if (movieData && movieData.length > 0) {
			setAreMovies(true);
		}
		if (searchTerm.length === 0 || movieData === undefined) {
			setAreMovies(false);
		}
		console.log(movieData);
	}, [movieData]);

	const handleResponseMessage = () => {
		if (isError) {
			return 'An Error occured during your movie search';
		}
		if (!areMovies) {
			return 'No movies found';
		}
		return '';
	};
	return (
		<Box p={4}>
			<Header />
			<Center h={!areMovies && !hasSearched ? '40vh' : undefined}>
				<SearchBar
					onSearch={searchMovies}
					isLoading={isLoading && !areMovies}
					searchTerm={searchTerm} // Pass searchTerm to SearchBar
					setSearchTerm={setSearchTerm} // Pass setSearchTerm to SearchBar
				/>
			</Center>
			{(hasSearched && !areMovies && !isLoading) || isError ? (
				<ActionResponse responseMessage={handleResponseMessage()} />
			) : null}
			{hasSearched && areMovies && <MovieList movies={movieData as Movie[]} />}
		</Box>
	);
};

export default App;
