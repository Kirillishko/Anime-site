import React from "react";
import { animeApi } from "../services/AnimeService";
import "../styles/animeMain.css";
import AnimeCompilation from "./AnimeCompilation";
import { IAnimeDatas } from "../models/Anime/IAnimeDatas";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface IPlaceAnimeCompilationProps {
	data?: IAnimeDatas;
	error?: FetchBaseQueryError | SerializedError;
	isLoading: boolean;
	title: string;
	index: number;
}

const PlaceAnimeCompilation = (props: IPlaceAnimeCompilationProps) => {
	const { data, error, isLoading, title, index } = props;

	if (isLoading) return <h1>Идёт загрузка...</h1>;
	if (error) return <h1>Ошибка при загрузке</h1>;

	return data && <AnimeCompilation key={index} animeData={data} title={title} />;
};

const AnimeMain = () => {
	const { data: popularOnWeekAnime, error: errorOnWeek, isLoading: isLoadingOnWeek } = animeApi.useFetchAnimePopularOnWeekQuery(5);
	const { data: popularOngoingAnime, error: errorOngoing, isLoading: isLoadingOngoing } = animeApi.useFetchAnimePopularOngoingQuery({ limit: 5, offset: 0 });
	const { data: popularUpcomingAnime, error: errorUpcoming, isLoading: isLoadingUpcoming } = animeApi.useFetchAnimePopularUpcomingQuery({ limit: 5, offset: 0 });
	const { data: averageRatingAnime, error: errorAverageRating, isLoading: isLoadingAverageRating } = animeApi.useFetchAnimeByAverageRatingQuery({ limit: 5, offset: 0 });
	const { data: mostPopularAnime, error: errorMostPopular, isLoading: isLoadingMostPopular } = animeApi.useFetchAnimeMostPopularQuery({ limit: 5, offset: 0 });

	return (
		<div className="animeMain">
			{PlaceAnimeCompilation({ data: popularOnWeekAnime, error: errorOnWeek, isLoading: isLoadingOnWeek, title: "Популярное на этой неделе", index: 1 })}
			{PlaceAnimeCompilation({ data: popularOngoingAnime, error: errorOngoing, isLoading: isLoadingOngoing, title: "Популярное аниме в онгоинге", index: 2 })}
			{PlaceAnimeCompilation({ data: popularUpcomingAnime, error: errorUpcoming, isLoading: isLoadingUpcoming, title: "Топ предстоящих аниме", index: 3 })}
			{PlaceAnimeCompilation({ data: averageRatingAnime, error: errorAverageRating, isLoading: isLoadingAverageRating, title: "Наиболее оценённые аниме", index: 4 })}
			{PlaceAnimeCompilation({ data: mostPopularAnime, error: errorMostPopular, isLoading: isLoadingMostPopular, title: "Самые популярные аниме", index: 5 })}
		</div>
	);
};

export default AnimeMain;
