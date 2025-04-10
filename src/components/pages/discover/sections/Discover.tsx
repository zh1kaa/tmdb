"use client";
import { useEffect, useState } from "react";
import scss from "./Discover.module.scss";
import { api, image } from "@/api";
import { useRouter } from "next/router";

interface IDiscoverMovies {
	page: number;
	results: Array<{
		adult: boolean;
		backdrop_path: string;
		genre_ids: Array<number>;
		id: number;
		original_language: string;
		original_title: string;
		overview: string;
		popularity: number;
		poster_path: string;
		release_date: string;
		title: string;
		video: boolean;
		vote_average: number;
		vote_count: number;
	}>;
	total_pages: number;
	total_results: number;
}

interface IMovieDetail {
	id: number;
	results: Array<{
		iso_639_1: string;
		iso_3166_1: string;
		name: string;
		key: string;
		site: string;
		size: number;
		type: string;
		official: boolean;
		published_at: string;
		id: string;
	}>;
}

export const Discover = () => {
	const [movies, setMovies] = useState<IDiscoverMovies | undefined>();
	const [discoverId, setDiscoverId] = useState<string>("");
	
	const getMovies = async () => {
		const { data } = await api.get(`/discover/movie`);
		setMovies(data);
	};

	const getMovieDetail = async (movieId: number) => {
		const { data } = await api.get<IMovieDetail>(
			`/movie/${movieId}/videos?language=en-US`
		);
		setDiscoverId(data.results[0].key);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<>
			<section className={scss.Discover}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.movies}>
							{movies?.results?.map((item, index) => (
								<div
									className={scss.movie}
									key={index}
								>
									<h1>{item.title}</h1>
									<img
										src={
											item.backdrop_path
												? `${image}${item.backdrop_path}`
												: "/placeholder.jpg"
										}
										alt={item.title}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			
			{/* <div
				className={discoverId ? `${scss.modal} ${scss.active}` : scss.modal}
				onClick={() => {
					setDiscoverId("");
				}}>
				<div className={scss.content}>
					{discoverId && (
						<iframe
							width="900"
							height="500"
							src={`https://www.youtube.com/embed/${discoverId}`}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						/>
					)}
				</div>
// 			</div> */}
// 		</>
	);
};
			
