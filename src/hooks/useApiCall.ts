import { useReducer } from 'react';
import { MovieSearch, MovieDetail } from '../lib/types/movies';
import { MovieTrailerDetail } from '../lib/types/movieTrailer';

export const ApiState = {
	API_INIT: 0,
	API_SUCCESS: 1,
	API_ERROR: 2,
};

interface ApiCallState {
	movieData: MovieSearch[] | MovieTrailerDetail | MovieDetail;
	isLoading: boolean;
	isError: boolean;
}

interface PerformApiCallOptions {
	apiFunction: any;
	args: string[];
	properties?: string[];
	headers?: string;
	movieId?: string;
}

const initialState: ApiCallState = {
	movieData: [],
	isLoading: false,
	isError: false,
};

function apiCallReducer(
	state: ApiCallState,
	action: { type: number; payload?: any }
): ApiCallState {
	switch (action.type) {
		case ApiState.API_INIT:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case ApiState.API_SUCCESS:
			return {
				...state,
				movieData: action.payload,
				isLoading: false,
				isError: false,
			};
		case ApiState.API_ERROR:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			throw new Error();
	}
}

export function useApiCall() {
	const [state, dispatch] = useReducer(apiCallReducer, initialState);

	const performApiCall = async ({
		apiFunction,
		args,
		properties,
		headers,
		movieId,
	}: PerformApiCallOptions) => {
		try {
			dispatch({ type: ApiState.API_INIT });
			const response = await apiFunction(...args);

			let payload = response.data;

			if (properties) {
				for (const property of properties) {
					payload = payload[property];
				}
			}

			dispatch({
				type: ApiState.API_SUCCESS,
				payload,
			});
		} catch (error) {
			dispatch({ type: ApiState.API_ERROR });
		}
	};

	return { state, performApiCall };
}
