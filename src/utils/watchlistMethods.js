import {
	crateMovieDocument,
	getWatchListDocs,
} from "./firebase/firebase.utils";

export const addToWatchList = async (movieDetails) => {
	try {
		await crateMovieDocument(movieDetails);
		const updatedWatchlist = await getWatchList();
		return updatedWatchlist;
	} catch (error) {
		throw error;
	}
};

export const getWatchList = async () => {
	try {
		return await getWatchListDocs();
	} catch (error) {
		throw error;
	}
};
