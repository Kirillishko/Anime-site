import React, {FC} from 'react';
import {IAnime} from "../models/Anime/IAnime";
import "../styles/animeMain.css"

interface AnimeViewProps {
    anime: IAnime
}

const AnimeView: FC<AnimeViewProps> = ({anime}) => {

    const posterImage = anime.attributes.posterImage.small;
    console.log(posterImage);

    return (
        <div className="animeView">
            <div className={"animeViewImage"}>
                {posterImage && <img src={posterImage}/>}
            </div>
            <h3>{anime.attributes.titles.ja_jp}</h3>
            {/*<h2>{anime.attributes.canonicalTitle}</h2>*/}
            <p>{anime.attributes.canonicalTitle}</p>
        </div>
    );
};

export default AnimeView;