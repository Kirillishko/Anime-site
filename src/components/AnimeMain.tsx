import React, {useEffect} from 'react';
import {animeApi} from "../services/AnimeService";
import "../styles/animeMain.css"
import AnimeCompilation from "./AnimeCompilation";

const AnimeMain = () => {
    const {data: popularOnWeekAnime, error: errorOnWeek, isLoading: isLoadingOnWeek } = animeApi.useFetchAnimePopularOnWeekQuery(20);
    const {data: popularOngoingAnime, error: errorOngoing, isLoading: isLoadingOngoing} = animeApi.useFetchAnimePopularOngoingQuery(15);


    return (
        <div className="animeMain">
            {/*{isLoading && <h1>Идёт загрузка...</h1>}*/}
            {/*{error && <h1>Ошибка при загрузке</h1>}*/}
            {popularOnWeekAnime &&
                    <AnimeCompilation key={0}
                                      animeCompilation={popularOnWeekAnime.data}/>
            }
            {popularOngoingAnime &&
                <AnimeCompilation key={1}
                                  animeCompilation={popularOngoingAnime.data}/>

            }
        </div>
    );
};

export default AnimeMain;