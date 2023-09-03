export interface MovieTrailer {
	trailerUrl: string;
}

export interface MovieTrailerDetail {
	results: {
		_id: string;
		id: string;
		trailer: string;
	};
}
