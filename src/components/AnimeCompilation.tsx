import React, {FC} from 'react';
import {IAnime} from "../models/Anime/IAnime";
import "../styles/animeMain.css"
import AnimeView from "./AnimeView";

interface AnimeCompilationProps {
    animeCompilation: IAnime[],
    title: string,
}

const AnimeCompilation: FC<AnimeCompilationProps> = ({animeCompilation, title}) => {

    return (
        <div className="animeCompilation">
            <div className="animeCompilationTitle">
                <h1>{title}</h1>
            </div>
            {animeCompilation.map(anime =>
                <AnimeView key={anime.id} anime={anime}/>
            )}
        </div>
    );
};

export default AnimeCompilation;