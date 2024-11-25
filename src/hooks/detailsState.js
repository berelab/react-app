import { useState, useEffect } from "react";
import moviesDetailsFetcher from "../services/movieDetailsFetcher";

const detailsState = (movieID) => {
	const [data, setData] = useState([]);
	const [loader, setLoader] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovieDetails = async () => {
			try {
				const result = await moviesDetailsFetcher(movieID);
				setData(result);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoader(false);
			}
		};
		getMovieDetails();
	}, [movieID]);

	return { data, loader, error };
};

export default detailsState;
