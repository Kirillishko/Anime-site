import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {animeApi} from "../../services/AnimeService";
import AnimeFullInfo from "./AnimeFullInfo";

const AnimePage = () => {
    const {id} = useParams();
    const {data: anime, error, isLoading} = animeApi.useFetchAnimeByIdQuery(String(id));

    console.log(`oneAnime = ${anime}`);
    console.log(anime);

    return (
        <div className={"animePage"}>
            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1>Ошибка при загрузке</h1>}
            {/*<h1>{anime && anime.data.attributes.canonicalTitle}</h1>*/}
            {/*<h1>id   = {id}</h1>*/}
            {anime && <AnimeFullInfo anime={anime.data}/>}
        </div>
    );
};

export default AnimePage;