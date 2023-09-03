export interface Movie {
	imdbID: string;
	Year: string;
	Poster: string;
	Title: string;
	Type: string;
	getMovieDetails: () => void;
	id: string;
}

export interface MovieSearch {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
}

export interface MovieDetail {
	Actors: string;
	Awards: string;
	BoxOffice: string;
	Country: string;
	DVD: string;
	Director: string;
	Genre: string;
	Language: string;
	Metascore: string;
	Plot: string;
	Poster: string;
	Production: string;
	Rated: string;
	Ratings: {
		Source: string;
		Value: string;
	}[];
	Released: string;
	Response: string;
	Runtime: string;
	Title: string;
	Type: string;
	Website: string;
	Writer: string;
	Year: string;
	imdbID: string;
	imdbRating: string;
	imdbVotes: string;
}
