import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IAnimeData} from "../models/Anime/IAnimeData";
import {IPagination} from "../models/IPagination";


export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://kitsu.io/api/edge'}),
    endpoints: (build) => ({
        fetchAnimeList: build.query<IAnimeData, IPagination>({
            query: ({limit, offset}) => ({
                url: '/anime',
                params: {
                    'page[limit]': limit,
                    'page[offset]': offset,
                }
            })
        }),
        fetchAnimePopularOnWeek: build.query<IAnimeData, number>({
            query: (limit: number) => ({
                url: '/trending/anime',
                params: {
                    limit: limit,
                }
            })
        }),
        fetchAnimePopularOngoing: build.query<IAnimeData, IPagination>({
            query: ({limit, offset}) => ({
                url: '/anime',
                params: {
                    'filter[status]': 'current',
                    'page[limit]': limit,
                    'page[offset]': offset,
                    'sort': '-user_count',
                }
            })
        }), //https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count
        fetchAnimePopularUpcoming: build.query<IAnimeData, IPagination>({
            query: ({limit, offset}) => ({
                url: '/anime',
                params: {
                    'filter[status]': 'upcoming',
                    'page[limit]': limit,
                    'page[offset]': offset,
                    'sort': '-user_count',
                }
            })
        }),
    })
})