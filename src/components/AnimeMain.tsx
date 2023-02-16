import React from 'react';
import {animeApi} from "../services/AnimeService";
import "../styles/animeMain.css"
import AnimeCompilation from "./AnimeCompilation";
import {IAnimeData} from "../models/Anime/IAnimeData";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
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
            {/*}*/}
        </div>
    );
};

export default AnimeMain;