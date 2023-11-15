import React, { FC } from "react";
import { IAnime } from "../models/Anime/IAnime";
import "../styles/animeMain.css";
import { Link } from "react-router-dom";

interface AnimeViewProps {
	anime: IAnime;
}

const AnimeView: FC<AnimeViewProps> = ({ anime }) => {
	const posterImage = anime.attributes.posterImage.small;

	return (
		<div className="animeView">
			<div className={"animeViewImage"}>
				<Link to={`/anime/${anime.id}`}>
					{posterImage && <img src={posterImage} />}
				</Link>
			</div>
			{/*<h3>{anime.attributes.titles.ja_jp}</h3>*/}
			<h3>{anime.attributes.canonicalTitle}</h3>
			<hr />
			<p>{anime.attributes.description}</p>
		</div>
	);
};

export default AnimeView;
