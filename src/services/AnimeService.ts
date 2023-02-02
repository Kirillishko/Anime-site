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
        }), //https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count
        fetchAnimePopularOngoing: build.query<IAnimeData, number>({
            query: (limit: number) => ({
                url: `/anime?filter%5Bstatus%5D=current&page%5Blimit%${limit}D=5&sort=-user_count`,
                ///anime?filter[status]=current&page[limit]=${limit}&sort=-user_count
            })
        }),
    })
})