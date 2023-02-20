import React, {FC} from 'react';
import {IAnime} from "../models/Anime/IAnime";
import "../styles/animeMain.css"
import AnimeView from "./AnimeView";
import {UseQuery} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {IPagination} from "../models/IPagination";
import {QueryDefinition} from "@reduxjs/toolkit/query";
import {IAnimeDatas} from "../models/Anime/IAnimeDatas";

interface AnimeCompilationProps {
    title: string,
    animeData: IAnimeDatas,
}

const AnimeCompilation: FC<AnimeCompilationProps> = ({title, animeData}) => {
    return (
        <div className="animeCompilation">
            <div className={"animeCompilationTitle"}>
                <h3>{title}</h3>
            </div>
            {animeData && animeData.data.map(anime =>
                <AnimeView key={anime.id} anime={anime}/>
            )}
        </div>
    );
};

export default AnimeCompilation;