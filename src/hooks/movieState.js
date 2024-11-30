import { useState, useEffect } from "react";
import moviesFetcher from "../services/moviesFetcher";
import movieGenreFetcher from "../services/movieGenresFetcher";

const movieState = (genreID) => {
	const [genre, setGenre] = useState([]);
	const [movies, setMovies] = useState([]);
	const [loading, setLoader] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovies = async () => {
			try {
				const genreResult = await movieGenreFetcher();
				setGenre(genreResult);

				const moviesByGenre = await Promise.all(
					genreResult.genres.map(async (genre) => {
						const moviesResult = await moviesFetcher(genre.id);
						return {
							...genre,
							movies: moviesResult.results,
						};
					})
				);

				setMovies(moviesByGenre);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoader(false);
			}
		};
		getMovies();
	}, [genreID]);

	return { genre, movies, loading, error };
};

export default movieState;
