import axios, { AxiosInstance } from 'axios';

const axiosParams = {
	baseURL: process.env.REACT_APP_OMDB_API_BASE_URL,
};

const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => {
	return {
		get: (url: string, config = {}) => axios.get(url, config),
	};
};

export default api(axiosInstance);
