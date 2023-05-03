import {IAnime} from "./IAnime";

export interface IAnimeData {
    data: IAnime,
    included?: [{
        id: string,
        attributes: {
            title: string
        }
    }],
}