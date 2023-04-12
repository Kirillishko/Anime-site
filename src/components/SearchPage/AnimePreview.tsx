import React, {FC} from 'react';
import {IAnime} from "../../models/Anime/IAnime";
import {animeApi} from "../../services/AnimeService";
import {getCategoryTranslate} from "../../translate/Translates";

interface IAnimePreviewProps {
    anime: IAnime;
}

const AnimePreview:FC<IAnimePreviewProps> = ({anime}) => {
    const {data: categories, error, isLoading} = animeApi.useFetchAnimeCategoriesByIdQuery(anime.id);

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
                    {categories && categories.data.map((anime) =>
                    getCategoryTranslate(anime.attributes.title))}
                </p>
                <p>{anime.attributes.description}</p>
            </div>
        </div>
    );
};

export default AnimePreview;