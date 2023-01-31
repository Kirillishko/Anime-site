import React, {useEffect} from 'react';
import {animeApi} from "../services/AnimeService";
import AnimeView from "./AnimeView";
import AnimeCompilation from "./AnimeCompilation";

const AnimeContainer = () => {
    const {data: animeList, error, isLoading } = animeApi.useFetchAnimeListQuery(5);

    console.log(animeList);

    return (
        <div className="animeContainer">
            {/*{isLoading && <h1>Идёт загрузка...</h1>}*/}
            {/*{error && <h1>Ошибка при загрузке</h1>}*/}
            {/*{animeList && (animeList.data.map(anime =>*/}
            {/*    <AnimeCompilation key={anime.id} anime={anime}/>)*/}
            {/*)}*/}
        </div>
    );
};

export default AnimeContainer;