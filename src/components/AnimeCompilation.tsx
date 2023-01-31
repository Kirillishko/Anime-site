import React, {FC} from 'react';
import {IAnime} from "../models/Anime/IAnime";
import "../styles/animeMain.css"
import AnimeView from "./AnimeView";

interface AnimeCompilationProps {
    animeCompilation: IAnime[],
}

const AnimeCompilation: FC<AnimeCompilationProps> = ({animeCompilation}) => {

    return (
        <div className="animeCompilation">
            {animeCompilation.map(anime =>
                <AnimeView anime={anime}/>
            )}
        </div>
    );
};

export default AnimeCompilation;