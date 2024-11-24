import { useState, useEffect } from "react";
import moviesFetcher from "../services/moviesFetcher";

const movieState = (genreID) => {
	const [data, setData] = useState([]);
	const [loading, setLoader] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovies = async () => {
			try {
				const result = await moviesFetcher(genreID);
				setData(result);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoader(false);
			}
		};
		getMovies();
	}, [genreID]);

	return { data, loading, error };
};

export default movieState;
