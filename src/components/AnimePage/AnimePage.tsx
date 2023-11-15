import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { animeApi } from "../../services/AnimeService";
import AnimeFullInfo from "./AnimeFullInfo";
import { IAnimeDatas } from "../../models/Anime/IAnimeDatas";
import { IAnimeData } from "../../models/Anime/IAnimeData";
import Trailer from "./Trailer";

const Place = (animeData?: IAnimeData) => {
	if (animeData) {
		console.log(animeData);
		return (
			<div>
				<AnimeFullInfo anime={animeData.data} />
				<Trailer animeData={animeData} />
			</div>
		);
	}
};

const AnimePage = () => {
	const { id } = useParams();
	const { data: anime, error, isLoading } = animeApi.useFetchAnimeByIdQuery(String(id));

	return (
		<div className={"animePage"}>
			{isLoading && <h1>Идёт загрузка...</h1>}
			{error && <h1>Ошибка при загрузке</h1>}
			{Place(anime)}
		</div>
	);
};

export default AnimePage;
