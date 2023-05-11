import React, {FC} from 'react';
import {IAnime} from "../../models/Anime/IAnime";
import {animeApi} from "../../services/AnimeService";
import {getCategoryTranslate, getShowTypeTranslate} from "../../translate/Translates";
import {IAnimeData} from "../../models/Anime/IAnimeData";

interface IAnimePreviewProps {
    anime: IAnime;
}

const AnimePreview:FC<IAnimePreviewProps> = ({anime}) => {

    const showType = getShowTypeTranslate(anime.attributes.showType);

    return (
        <div className={"animePreview table"}>
            <div className={"animePreview-left"}>
                <img src={anime.attributes.posterImage.small}/>
            </div>
            <div className={"animePreview-right"}>
                <h3>{anime.attributes.titles.en}</h3>
                <h2>{anime.attributes.canonicalTitle}</h2>
                {/*<h3>{anime.attributes.titles.ja_jp}</h3>*/}
                <p>{showType} / {anime.attributes.startDate}</p>
                {/*<p>{anime.attributes.description}</p>*/}
            </div>
        </div>
    );
};

export default AnimePreview;