import React, {FC} from 'react';
import {IAnime} from "../../models/Anime/IAnime";
import {animeApi} from "../../services/AnimeService";
import {getCategoryTranslate, getShowTypeTranslate} from "../../translate/Translates";
import {IAnimeData} from "../../models/Anime/IAnimeData";
import { Link } from 'react-router-dom';
import {formatToShortDate} from "../../helpers/dataFormatter";

interface IAnimePreviewProps {
    anime: IAnime;
}

const AnimePreview:FC<IAnimePreviewProps> = ({anime}) => {

    const showType = getShowTypeTranslate(anime.attributes.showType);
    const date = formatToShortDate(anime.attributes.startDate);
    const secondName = anime.attributes.titles.en ? anime.attributes.titles.en : anime.attributes.titles.ja_jp;


    return (
        <div className={"animePreview table"}>
            <div className={"animePreview-left"}>
                <Link to={`/anime/${anime.id}`}>
                <img src={anime.attributes.posterImage.small}/>
                </Link>
            </div>
            <div className={"animePreview-right"}>
                <h3>{secondName}</h3>
                <Link to={`/anime/${anime.id}`}>
                    <h2>{anime.attributes.canonicalTitle}</h2>
                </Link>
                <p>{showType} / {date}</p>
                {/*<p>{anime.attributes.description}</p>*/}
            </div>
        </div>
    );
};

export default AnimePreview;