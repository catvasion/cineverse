import axios, { AxiosInstance } from 'axios';

const createApiCall = (baseURL: any): AxiosInstance => {
	const axiosInstance = axios.create({
		baseURL,
	});

	return axiosInstance;
};

export default createApiCall;
