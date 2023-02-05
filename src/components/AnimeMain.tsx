import React, {useEffect} from 'react';
import {animeApi} from "../services/AnimeService";
import "../styles/animeMain.css"
import AnimeCompilation from "./AnimeCompilation";
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {IAnimeData} from "../models/Anime/IAnimeData";
import {IPagination} from "../models/IPagination";
import {BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition} from "@reduxjs/toolkit/query";

function getCum(
    cum : UseQuery<QueryDefinition<IPagination, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, IAnimeData, "animeApi">> |
          UseQuery<QueryDefinition<number, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, IAnimeData, "animeApi">>,
    params: IPagination | number) {
    if (typeof(params) == "number")
        cum(params as IPagination)
    else
        cum(params as number)
}

const AnimeMain = () => {
    //const {data: anime, error, isLoading } = animeApi.useFetchAnimeListQuery({limit: 10, offset: 5});
    getCum(animeApi.useFetchAnimePopularOnWeekQuery, {limit: 1, offset: 1});
    let cum = animeApi.useFetchAnimePopularOnWeekQuery;
    const {data: popularOnWeekAnime, error: errorOnWeek, isLoading: isLoadingOnWeek } = animeApi.useFetchAnimePopularOnWeekQuery(5);
    const {data: popularOngoingAnime, error: errorOngoing, isLoading: isLoadingOngoing} = animeApi.useFetchAnimePopularOngoingQuery({limit: 5, offset: 0});
    const {data: popularUpcomingAnime, error: errorUpcoming, isLoading: isLoadingUpcoming} = animeApi.useFetchAnimePopularUpcomingQuery({limit: 5, offset: 0});


    return (
        <div className="animeMain">
            {/*{isLoading && <h1>Идёт загрузка...</h1>}*/}
            {/*{error && <h1>Ошибка при загрузке</h1>}*/}
            {/*{popularOnWeekAnime &&*/}
            {/*        <AnimeCompilation key={0}*/}
            {/*                          animeCompilation={popularOnWeekAnime.data}/>*/}
            {/*}*/}
            {/*{popularOngoingAnime &&*/}
            {/*    <AnimeCompilation key={1}*/}
            {/*                      animeCompilation={popularOngoingAnime.data}/>*/}

            {/*}*/}
            {/*{popularOngoingAnime &&*/}
            {/*    <AnimeCompilation key={2}*/}
            {/*                      animeCompilation={popularOngoingAnime.data}/>*/}
            {/*}*/}
            <AnimeCompilation fetchAnime={animeApi.useFetchAnimePopularOnWeekQuery} params={1}/>
            <AnimeCompilation fetchAnime={animeApi.useFetchAnimePopularUpcomingQuery} params={1}/>
            <AnimeCompilation fetchAnime={animeApi.useFetchAnimePopularOngoingQuery} params={1}/>
        </div>
    );
};

export default AnimeMain;