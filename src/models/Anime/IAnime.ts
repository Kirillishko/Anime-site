import {IAnimeAttributes} from "./IAnimeAttributes";

export interface IAnime {
    id: string,
    type: string,
    attributes: IAnimeAttributes,
}