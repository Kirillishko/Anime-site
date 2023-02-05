import React, {FC} from 'react';
import {IAnime} from "../models/Anime/IAnime";
import "../styles/animeMain.css"
import AnimeView from "./AnimeView";
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {IPagination} from "../models/IPagination";
import {QueryDefinition} from "@reduxjs/toolkit/query";
import {IAnimeData} from "../models/Anime/IAnimeData";

interface AnimeCompilationProps {
    fetchAnime: UseQuery<QueryDefinition<IPagination | number, any, any, IAnimeData>>,
    params : IPagination | number,
}

const AnimeCompilation: FC<AnimeCompilationProps> = ({fetchAnime, params}) => {

    const {data: animeData, error: error, isLoading: isLoading} = fetchAnime(params)

    return (
        <div className="animeCompilation">
            {animeData && animeData.data.map(anime =>
                <AnimeView key={anime.id} anime={anime}/>
            )}
        </div>
    );
};

export default AnimeCompilation;