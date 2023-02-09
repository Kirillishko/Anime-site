import React, {useEffect, useState} from 'react';
import {animeApi} from "../services/AnimeService";
import "../styles/animeMain.css"
import AnimeCompilation from "./AnimeCompilation";
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {IAnimeData} from "../models/Anime/IAnimeData";
import {IPagination} from "../models/IPagination";
import {BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition} from "@reduxjs/toolkit/query";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {SerializedError} from "@reduxjs/toolkit";

interface IPlaceAnimeCompilationProps {
    data?: IAnimeData,
    error?:  FetchBaseQueryError | SerializedError,
    isLoading: boolean,
    index: number,
}

const PlaceAnimeCompilation = (props: IPlaceAnimeCompilationProps) => {
    const {data, error, isLoading, index} = props

    if (isLoading)
        return <h1>Идёт загрузка...</h1>
    if (error)
        return <h1>Ошибка при загрузке</h1>

     return data &&
         <AnimeCompilation key={index}
                           animeData={data}/>
}

const AnimeMain = () => {
    const {data: popularOnWeekAnime, error: errorOnWeek, isLoading: isLoadingOnWeek} = animeApi.useFetchAnimePopularOnWeekQuery(5);
    const {data: popularOngoingAnime, error: errorOngoing, isLoading: isLoadingOngoing} = animeApi.useFetchAnimePopularOngoingQuery({limit: 5, offset: 0});
    const {data: popularUpcomingAnime, error: errorUpcoming, isLoading: isLoadingUpcoming} = animeApi.useFetchAnimePopularUpcomingQuery({limit: 5, offset: 0});

    return (
        <div className="animeMain">
            {PlaceAnimeCompilation({data: popularOnWeekAnime, error: errorOnWeek, isLoading: isLoadingOnWeek, index: 1})}
            {PlaceAnimeCompilation({data: popularOngoingAnime, error: errorOngoing, isLoading: isLoadingOngoing, index: 2})}
            {PlaceAnimeCompilation({data: popularUpcomingAnime, error: errorUpcoming, isLoading: isLoadingUpcoming, index: 3})}
            {/*{isLoadingOnWeek && <h1>Идёт загрузка...</h1>}*/}
            {/*{errorOnWeek && <h1>Ошибка при загрузке</h1>}*/}
            {/*{popularOnWeekAnime &&*/}
            {/*        <AnimeCompilation key={0}*/}
            {/*                          animeData={popularOnWeekAnime}/>*/}
            {/*}*/}
            {/*{errorOngoing && <h1>Идёт загрузка...</h1>}*/}
            {/*{isLoadingOngoing && <h1>Ошибка при загрузке</h1>}*/}
            {/*{popularOngoingAnime &&*/}
            {/*    <AnimeCompilation key={1}*/}
            {/*                      animeData={popularOngoingAnime}/>*/}
            {/*}*/}
            {/*{errorOngoing && <h1>Идёт загрузка...</h1>}*/}
            {/*{isLoadingOngoing && <h1>Ошибка при загрузке</h1>}*/}
            {/*{popularOngoingAnime &&*/}
            {/*    <AnimeCompilation key={1}*/}
            {/*                      animeData={popularOngoingAnime}/>*/}
            {/*}*/}
        </div>
    );
};

export default AnimeMain;