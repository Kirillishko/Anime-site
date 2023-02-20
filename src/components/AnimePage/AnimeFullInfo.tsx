import React, {FC} from 'react';
import {IAnime} from "../../models/Anime/IAnime";
import Tooltip from "../Tooltip";

interface AnimeFullInfoProps {
    anime: IAnime
}

const AnimeFullInfo: FC<AnimeFullInfoProps> = ({anime}) => {
    const {attributes} = anime;

    const locale = new Intl.Locale("ru", {});

    const dateOptions: Intl.DateTimeFormatOptions = {
        era: "long",                    // "long" | "short" | "narrow"
        year: "numeric",                // "numeric" | "2-digit"
        month: "long",                  // "numeric" | "2-digit" | "long" | "short" | "narrow"
        day: "numeric",                 // "numeric" | "2-digit"
        weekday: "short",               // "long" | "short" | "narrow"
        hour: "numeric",                // "numeric" | "2-digit"
        minute: "numeric",              // "numeric" | "2-digit"
        second: "numeric",              // "numeric" | "2-digit"
        timeZoneName: "shortGeneric",   // "long" | "short" | "longGeneric" | "shortOffset" | "longOffset" | "shortGeneric"
        hour12: false,                  // true | false
        formatMatcher : "basic",     // "best fit" | "basic"
    };

    const ruDate = Intl.DateTimeFormat(locale.toString(), dateOptions);

    const time = ruDate.format(new Date(attributes.createdAt))

    return (
        <div className={"animeFullInfo"}>
            <div className={"left-part"}>
                <img src={attributes.posterImage.small} alt={"Poster"}/>
            </div>
            <div className={"right-part"}>
                <div className={"titles"}>
                    <h2>{attributes.canonicalTitle}</h2>
                    <h3>{attributes.titles.en_jp}</h3>
                    <h3>{attributes.titles.ja_jp}</h3>
                </div>
                <hr/>
                <div className={"info-item"}>
                    <p className={"info-names"}>Следующий эпизод</p>
                    <p className={"info-descriptions"}>Кам</p>
                </div>
                <hr/>
                <div className={"info"}>
                    <div className={"info-item"}>
                        <p className={"info-names"}>createdAt</p>
                        <p className={"info-descriptions"}>{time}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>createdAt</p>
                        <p className={"info-descriptions"}>{attributes.createdAt}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>updatedAt</p>
                        <p className={"info-descriptions"}>{attributes.updatedAt}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>slug</p>
                        <p className={"info-descriptions"}>{attributes.slug}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>averageRating</p>
                        <p className={"info-descriptions"}>{attributes.averageRating}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>userCount</p>
                        <p className={"info-descriptions"}>{attributes.userCount}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>favoritesCount</p>
                        <p className={"info-descriptions"}>{attributes.favoritesCount}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>startDate</p>
                        <p className={"info-descriptions"}>{attributes.startDate}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>endDate</p>
                        <p className={"info-descriptions"}>{attributes.endDate}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>nextRelease</p>
                        <p className={"info-descriptions"}>{attributes.nextRelease}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>popularityRank</p>
                        <p className={"info-descriptions"}>{attributes.popularityRank}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>ratingRank</p>
                        <p className={"info-descriptions"}>{attributes.ratingRank}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>ageRating</p>
                        <p className={"info-descriptions"}>{attributes.ageRating}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>ageRatingGuide</p>
                        <p className={"info-descriptions"}>{attributes.ageRatingGuide}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>subtype</p>
                        <p className={"info-descriptions"}>{attributes.subtype}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>status</p>
                        <p className={"info-descriptions"}>{attributes.status}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>tba</p>
                        <p className={"info-descriptions"}>{attributes.tba}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>episodeCount</p>
                        <p className={"info-descriptions"}>{attributes.episodeCount}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>Длительность</p>
                        <p className={"info-descriptions"}>{attributes.episodeLength}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>totalLength</p>
                        <p className={"info-descriptions"}>{attributes.totalLength}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>youtubeVideoId</p>
                        <p className={"info-descriptions"}>{attributes.youtubeVideoId}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>showType</p>
                        <p className={"info-descriptions"}>{attributes.showType}</p>
                    </div>
                    <div className={"info-item"}>
                        <p className={"info-names"}>nsfw</p>
                        <p className={"info-descriptions"}>{attributes.nsfw}</p>
                    </div>
                    {/*<div className={"info-names"}>*/}
                    {/*    <p>createdAt</p>*/}
                    {/*    <p>updatedAt</p>*/}
                    {/*    <p>slug</p>*/}
                    {/*    <p>averageRating</p>*/}
                    {/*    <p>userCount</p>*/}
                    {/*    <p>favoritesCount</p>*/}
                    {/*    <p>startDate</p>*/}
                    {/*    <p>endDate</p>*/}
                    {/*    <p>nextRelease</p>*/}
                    {/*    <p>popularityRank</p>*/}
                    {/*    <p>ratingRank</p>*/}
                    {/*    <p>ageRating</p>*/}
                    {/*    <p>ageRatingGuide</p>*/}
                    {/*    <p>subtype</p>*/}
                    {/*    <p>status</p>*/}
                    {/*    <p>tba</p>*/}
                    {/*    <p>episodeCount</p>*/}
                    {/*    <p>Длительность</p>*/}
                    {/*    <p>totalLength</p>*/}
                    {/*    <p>youtubeVideoId</p>*/}
                    {/*    <p>showType</p>*/}
                    {/*    <p>nsfw</p>*/}
                    {/*</div>*/}
                    {/*<div className={"info-descriptions"}>*/}
                    {/*    <p>{attributes.createdAt}</p>*/}
                    {/*    <p>{attributes.updatedAt}</p>*/}
                    {/*    <p>{attributes.slug}</p>*/}
                    {/*    <p>{attributes.averageRating}</p>*/}
                    {/*    <p>{attributes.userCount}</p>*/}
                    {/*    <p>{attributes.favoritesCount}</p>*/}
                    {/*    <p>{attributes.startDate}</p>*/}
                    {/*    <p>{attributes.endDate}</p>*/}
                    {/*    <p>{attributes.nextRelease}</p>*/}
                    {/*    <p>{attributes.popularityRank}</p>*/}
                    {/*    <p>{attributes.ratingRank}</p>*/}
                    {/*    <p>{attributes.ageRating}</p>*/}
                    {/*    <p>{attributes.ageRatingGuide}</p>*/}
                    {/*    <p>{attributes.subtype}</p>*/}
                    {/*    <p>{attributes.status}</p>*/}
                    {/*    <p>{attributes.tba}</p>*/}
                    {/*    <p>{attributes.episodeCount}</p>*/}
                    {/*    <p>{attributes.episodeLength} мин. ~ серия</p>*/}
                    {/*    <p>{attributes.totalLength}</p>*/}
                    {/*    <p>eoId: {attributes.youtubeVideoId}</p>*/}
                    {/*    <p>{attributes.showType}</p>*/}
                    {/*    <p>{attributes.nsfw}</p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default AnimeFullInfo;