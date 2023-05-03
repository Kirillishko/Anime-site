import {IPagination} from "./IPagination";
import {IAnimeDatas} from "./Anime/IAnimeDatas";

export interface ISearch {
    pagination: IPagination,
    title: string,
    categories: string,
    status: string,
    showType: string,
    sort: string,
}