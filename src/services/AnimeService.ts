import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IAnimeDatas} from "../models/Anime/IAnimeDatas";
import {IPagination} from "../models/IPagination";
import {IAnime} from "../models/Anime/IAnime";
import {IAnimeData} from "../models/Anime/IAnimeData";
import {ICategories} from "../models/Anime/Category/ICategories";
import {ISearch} from "../models/ISearch";
import {IAnimeDatasCategories} from "../models/Anime/IAnimeDatasCategories";


export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://kitsu.io/api/edge'}),
    endpoints: (build) => ({
        fetchAnimeList: build.query<IAnimeDatas, IPagination>({
            query: ({limit, offset}) => ({
                url: '/anime',
                params: {
                    'page[limit]': limit,
                    'page[offset]': offset,
                }
            })
        }),
        fetchAnimePopularOnWeek: build.query<IAnimeDatas, number>({
            query: (limit: number) => ({
                url: '/trending/anime',
                params: {
                    limit: limit,
                }
            })
        }),
        fetchAnimePopularOngoing: build.query<IAnimeDatas, IPagination>({
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
        fetchAnimePopularUpcoming: build.query<IAnimeDatas, IPagination>({
            query: ({limit, offset}) => ({
                url: '/anime',
                params: {
                    'filter[status]': 'upcoming',
                    'page[limit]': limit,
                    'page[offset]': offset,
                    'sort': '-user_count',
                }
            })
        }), // https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating
        fetchAnimeByAverageRating: build.query<IAnimeDatas, IPagination>({
            query: ({limit, offset}) => ({
                url: '/anime',
                params: {
                    'page[limit]': limit,
                    'page[offset]': offset,
                    'sort': '-average_rating',
                }
            })
        }), //https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count
        fetchAnimeMostPopular: build.query<IAnimeDatas, IPagination>({
            query: ({limit, offset}) => ({
                url: '/anime',
                params: {
                    'page[limit]': limit,
                    'page[offset]': offset,
                    'sort': '-user_count',
                }
            })
        }),
        //http://localhost:3000/Chainsaw%20Man
        //https://kitsu.io/api/edge/anime?filter[text]=Cowboy%20Bebop
        fetchAnimeByName: build.query<IAnimeDatas, string>({
            query: (name) => ({
                url: '/anime',
                params: {
                    'filter[text]': name,
                    'page[limit]': 1,
                }
            })
        }),
        fetchAnimeById: build.query<IAnimeData, string>({
            query: (id) => ({
                url: `/anime/${id}?include=categories`
            })
        }),
        fetchAnimeCategoriesById: build.query<ICategories, string>({
            query: (id) => ({
                url: `/anime/${id}/categories`
            })
        }), // https://kitsu.io/api/edge/anime/43845/categories
        fetchAnimeSearch: build.query<IAnimeDatas, ISearch>({
            query: ({pagination, title, categories, sort}) => ({
                url: `/anime`,
                params: {
                    'page[limit]': pagination.limit,
                    'page[offset]': pagination.offset,
                    'filter[text]': title,
                    'filter[categories]': categories,
                    'sort': sort,
                }
            })
        }), // https://kitsu.io/api/edge/anime/43845/categories
        fetchAnimeSearchStraight: build.query<IAnimeDatas, string>({
            query: (url) => ({
                url: `/anime?${url}`
            })
        }),
    })
})