import React, {FC} from 'react';
import {IAnimeData} from "../../models/Anime/IAnimeData";
import {IAnime} from "../../models/Anime/IAnime";
import {animeApi} from "../../services/AnimeService";
import {getCategoryTranslate} from "../../translate/Translates";

interface TrailerProps {
    animeData: IAnimeData,
}

const Trailer:FC<TrailerProps> = ({animeData}) => {
    const anime = animeData.data;
    const categories = animeData.included;
    const youtubeSrc = `https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`;

    return (
        <div className={"trailer"}>
            <div className={"trailer-wrapper"}>
                <h1>Смотреть трейлер «{anime.attributes.canonicalTitle}»</h1>
                <div className={"trailer-content"}>
                    <div className="trailer-item">
                        <iframe src= {youtubeSrc} seamless={true} loading={"lazy"}  frameBorder={"none"} allowFullScreen/>
                    </div>
                    <div className="trailer-categories">
                        {categories && categories.map((category) =>
                            <p key={category.id}>{getCategoryTranslate(category.attributes.title)}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trailer;