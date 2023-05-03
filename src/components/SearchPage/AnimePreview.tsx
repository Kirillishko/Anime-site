import React, {FC} from 'react';
import {IAnime} from "../../models/Anime/IAnime";
import {animeApi} from "../../services/AnimeService";
import {getCategoryTranslate} from "../../translate/Translates";
import {IAnimeData} from "../../models/Anime/IAnimeData";

interface IAnimePreviewProps {
    animeData: IAnimeData;
}

const AnimePreview:FC<IAnimePreviewProps> = ({animeData}) => {
    const anime = animeData.data;
    const categories = animeData.included;

    return (
        <div className={"animePreview"}>
            <div className={"animePreview-left"}>
                <img src={anime.attributes.posterImage.small}/>
            </div>
            <div className={"animePreview-right"}>
                <h2>{anime.attributes.canonicalTitle}</h2>
                <h3>{anime.attributes.titles.en}</h3>
                <h3>{anime.attributes.titles.ja_jp}</h3>
                <p>{anime.attributes.showType} / {anime.attributes.startDate} /
                    {categories && categories.map((category) =>
                    getCategoryTranslate(category.attributes.title))}
                </p>
                <p>{anime.attributes.description}</p>
            </div>
        </div>
    );
};

export default AnimePreview;