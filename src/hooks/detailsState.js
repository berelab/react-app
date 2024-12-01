import { useState, useEffect } from "react";
import moviesDetailsFetcher from "../services/movieDetailsFetcher";
import movieRecoFetcher from "../services/movieRecoFecther";

const detailsState = (movieID) => {
	const [data, setData] = useState([]);
	const [recos, setRecos] = useState([]);
	const [loader, setLoader] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovieDetails = async () => {
			try {
				const result = await moviesDetailsFetcher(movieID);
				setData(result);
				const recosResult = await movieRecoFetcher(movieID);
				setRecos(recosResult);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoader(false);
			}
		};
		getMovieDetails();
	}, [movieID]);

	return { recos, data, loader, error };
};

export default detailsState;
