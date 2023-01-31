import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IAnimeData} from "../models/Anime/IAnimeData";


export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://kitsu.io/api/edge'}),
    endpoints: (build) => ({
        fetchAnimeList: build.query<IAnimeData, number>({
            query: (offset: number) => ({
                url: `/anime?page[limit]=20&page[offset]=${offset}`
                // params: {
                //     page[limit]=20&page[offset]=0
                // }
            })
        }),
        fetchAnimePopularOnWeek: build.query<IAnimeData, number>({
            query: (limit: number) => ({
                url: `/trending/anime`,
                params: {
                    limit: limit,
                }
            })
        }),
    })
})