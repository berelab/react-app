import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBKcTz2zsYz0ofF2lef6H_n9TzTd4bdxOg",
	authDomain: "movies-app-db-5d477.firebaseapp.com",
	projectId: "movies-app-db-5d477",
	storageBucket: "movies-app-db-5d477.firebasestorage.app",
	messagingSenderId: "269793060068",
	appId: "1:269793060068:web:71b3da04d6ae2a16b7b8f1",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const crateMovieDocument = async (movie) => {
	const docReference = doc(db, "watchlist", String(movie.id));
	const movieData = await getDoc(docReference);

	if (!movieData.exists()) {
		const { id, title, release_date, poster_path } = movie;
		const addedAt = new Date();
		try {
			await setDoc(docReference, {
				id,
				title,
				release_date,
				poster_path,
				addedAt,
			});
		} catch (error) {
			console.log(error);
		}

		return docReference;
	}
};
