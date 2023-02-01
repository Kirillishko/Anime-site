import React, {useEffect} from 'react';
import {animeApi} from "../services/AnimeService";
import "../styles/animeMain.css"
import AnimeCompilation from "./AnimeCompilation";

const AnimeMain = () => {
    const {data: popularOnWeekAnime, error, isLoading } = animeApi.useFetchAnimePopularOnWeekQuery(5);
    console.log(popularOnWeekAnime);


    return (
        <div className="animeMain">
            {/*{isLoading && <h1>Идёт загрузка...</h1>}*/}
            {/*{error && <h1>Ошибка при загрузке</h1>}*/}
            {popularOnWeekAnime &&
                    <AnimeCompilation key={0}
                                      animeCompilation={popularOnWeekAnime.data}/>

            }
        </div>
    );
};

export default AnimeMain;