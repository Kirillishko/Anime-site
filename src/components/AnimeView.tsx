import React, {FC} from 'react';
import {IAnime} from "../models/Anime/IAnime";
import "../styles/animeMain.css"

interface AnimeViewProps {
    anime: IAnime
}

const getAnime = () => {

}

const AnimeView: FC<AnimeViewProps> = ({anime}) => {

    const posterImage = anime.attributes.posterImage.small;
    console.log(posterImage);

    return (
        <div className="animeView">
            <div className={"animeViewImage"}>
                {posterImage && <img src={posterImage}/>}
            </div>
            <h3>{anime.attributes.titles.en}</h3>
            <h3>{anime.attributes.canonicalTitle}</h3>
            <p>{anime.attributes.description}</p>
        </div>
    );
};

export default AnimeView;