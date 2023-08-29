import { useReducer } from 'react';

export const ApiState = {
	API_INIT: 0,
	API_SUCCESS: 1,
	API_ERROR: 2,
};

interface ApiCallState<T> {
	movieData: T[];
	isLoading: boolean;
	isError: boolean;
}

interface PerformApiCallOptions {
	apiFunction: any;
	args: string[];
	properties: string;
}

const initialState: ApiCallState<any> = {
	movieData: [],
	isLoading: false,
	isError: false,
};

function apiCallReducer<T>(
	state: ApiCallState<T>,
	action: { type: number; payload?: any }
): ApiCallState<T> {
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

export function useApiCall<T>() {
	const [state, dispatch] = useReducer(apiCallReducer, initialState);
	const performApiCall = async ({
		apiFunction,
		args,
		properties,
	}: PerformApiCallOptions) => {
		try {
			dispatch({ type: ApiState.API_INIT });
			const response = await apiFunction(...args);
			dispatch({
				type: ApiState.API_SUCCESS,
				payload: response.data[properties],
			});
		} catch (error) {
			dispatch({ type: ApiState.API_ERROR });
		}
	};

	return { state, performApiCall };
}