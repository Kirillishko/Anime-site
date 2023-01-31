import {IAnimeTitles} from "./IAnimeTitles";
import {IAnimeImages} from "./IAnimeImages";

export interface IAnimeAttributes {
    createdAt: string,
    updatedAt: string,
    slug: string,
    description: string,
    coverImageTopOffset: number,
    titles: IAnimeTitles,
    canonicalTitle: string,
    averageRating: number,
    userCount: number,
    favoritesCount: number,
    startDate: string,
    endDate: string,
    nextRelease: string | null,
    popularityRank: number,
    ratingRank: number,
    ageRating: string,
    ageRatingGuide: string,
    subtype: string,
    status: string,
    tba: null,
    posterImage: IAnimeImages,
    coverImage: IAnimeImages | null,
    episodeCount: number,
    episodeLength: number,
    totalLength: number,
    youtubeVideoId: string,
    showType: string,
    nsfw: boolean,
}