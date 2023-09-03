import createApiCall from './api';
import { AxiosRequestConfig } from 'axios';

const dynamicBaseUrl = process.env.REACT_APP_OMDB_API_BASE_URL;
const apiCall = createApiCall(dynamicBaseUrl);

export const searchForMovies = async (
	term: string,
	config: AxiosRequestConfig = {}
) => {
	try {
		return apiCall.get(
			'',
			(config = {
				params: {
					apikey: `${process.env.REACT_APP_OMDB_API_TOKEN}`,
					s: term,
				},
			})
		);
	} catch (error) {
		throw error;
	}
};

export const fetchMovieDetailsById = async (
	movieId: string,
	config: AxiosRequestConfig = {}
) => {
	try {
		return apiCall.get(
			'',
			(config = {
				params: {
					apikey: `${process.env.REACT_APP_OMDB_API_TOKEN}`,
					i: movieId,
				},
			})
		);
	} catch (error) {
		throw error;
	}
};
