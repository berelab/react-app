import axios from "axios";

const movieGenreFetcher = async () => {
	try {
		const TOKEN =
			"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmI5NWNhMDlmMzNlODNkNTc5YzcwMzU4NTM1YzQ4MCIsIm5iZiI6MTczMjQ2Mjg4OC40NTAzMjg4LCJzdWIiOiI2NzQzNDdkYTYzNzBlY2FkM2YwMDAzMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YHaO72EKte7jX4SDDrBP_tnYDGJS9Hx1L5-NDwyD97g";

		const API_URL = "https://api.themoviedb.org/3/genre/movie/list?language=en";

		const response = await axios.get(API_URL, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${TOKEN}`,
			},
		});
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
};

export default movieGenreFetcher;