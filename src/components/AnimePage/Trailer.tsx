import React, {FC} from 'react';
import {IAnimeData} from "../../models/Anime/IAnimeData";
import {IAnime} from "../../models/Anime/IAnime";
import {animeApi} from "../../services/AnimeService";
import {getCategoryTranslate} from "../../translate/Translates";

interface TrailerProps {
    anime: IAnime,
}

const Trailer:FC<TrailerProps> = ({anime}) => {

    const {data: categories, error, isLoading} = animeApi.useFetchAnimeCategoriesByIdQuery(anime.id);
    const src = `https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`;

    return (
        <div className={"trailer"}>
            <div className={"trailer-wrapper"}>
                <h1>Смотреть трейлер «{anime.attributes.canonicalTitle}»</h1>
                <div className={"trailer-content"}>
                    <div className="trailer-item">
                        <iframe src= {src} seamless={true} loading={"lazy"}  frameBorder={"none"} allowFullScreen/>
                    </div>
                    <div className="trailer-categories">
                        {isLoading && <p>Идёт загрузка...</p>}
                        {error && <p>Ошибка при загрузке</p>}
                        {categories && categories.data.map((anime) =>
                            <p key={anime.id}>{getCategoryTranslate(anime.attributes.title)}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trailer;