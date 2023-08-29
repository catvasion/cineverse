import api from './api';
import { AxiosRequestConfig } from 'axios';

export const searchForMovies = (term: string, config: AxiosRequestConfig) => {
	try {
		return api.get(
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
