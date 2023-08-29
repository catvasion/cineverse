// import api from './api';
// import { AxiosRequestConfig } from 'axios';

// export const searchForMovies = (
// 	term: string,
// 	config: AxiosRequestConfig = {}
// ) => {
// 	try {
// 		const baseUrl = process.env.REACT_APP_OMDB_API_BASE_URL;
// 		const apiClient = api(baseUrl);

// 		return apiClient.get(
// 			'',
// 			(config = {
// 				params: {
// 					apikey: `${process.env.REACT_APP_OMDB_API_TOKEN}`,
// 					s: term,
// 				},
// 				...config,
// 			})
// 		);
// 	} catch (error) {
// 		throw error;
// 	}
// };

// import api from './api';

// export const searchForMovies = (
// 	term: string,
// 	config: AxiosRequestConfig = {}
// ) => {
// 	try {
// 		const baseUrl = 'your_dynamic_base_url_here'; // Replace with your dynamic base URL

// 		const apiClient = api(baseUrl);

// 		return apiClient.get('', {
// 			params: {
// 				apikey: `${process.env.REACT_APP_OMDB_API_TOKEN}`,
// 				s: term,
// 			},
// 			...config,
// 		});
// 	} catch (error) {
// 		throw error;
// 	}
// };

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
