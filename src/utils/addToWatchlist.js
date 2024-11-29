import { crateMovieDocument } from "./firebase/firebase.utils";

export const addToWatchList = (movieDetails) => {
	try {
		crateMovieDocument(movieDetails);
	} catch (error) {
		console.log("error : ", error);
	}
};
