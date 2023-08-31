import createApiCall from './api';
import { AxiosRequestConfig } from 'axios';

const dynamicBaseUrl = process.env.REACT_APP_MOVIESDATABASE_API_BASE_URL;
const apiCall = createApiCall(dynamicBaseUrl);

export const movieTrailers = async (
	movieId: string,
	config: AxiosRequestConfig = {}
) => {
	try {
		return apiCall.get(
			`titles/${movieId}`,
			(config = {
				params: { info: 'trailer' },
				headers: {
					'X-RapidAPI-Key': process.env.REACT_APP_MOVIESDATABASE_API_TOKEN,
					'X-RapidAPI-Host': process.env.REACT_APP_MOVIESDATABASE_API_HOST,
					...config.headers, //
				},
			})
		);
	} catch (error) {
		throw error;
	}
};
