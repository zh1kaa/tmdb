import axios from "axios";

const api_key =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2Y5NTUyZDAwMmNhNTk3NzFlNjExN2MzMDU2ZjJiNyIsIm5iZiI6MTc0MzYzMzIxMy4wMTUsInN1YiI6IjY3ZWRiYjNkNDY4MGYyNmJmM2E3OGU5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UOMYat6EAuedYxRPUgqnQ6Fn4Jpqt1AVx-WlD5SgShg";

export const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		Authorization: `Bearer ${api_key}`,
	},
});

export const image = "https://image.tmdb.org/t/p/original";
