import React, { FC } from "react";
import { IAnime } from "../../models/Anime/IAnime";
import { formatToLongDate } from "../../helpers/dataFormatter";
import InfoItem from "./InfoItem";
import { getShowTypeTranslate, getStatusTranslate } from "../../translate/Translates";

interface AnimeFullInfoProps {
	anime: IAnime;
}

<<<<<<< Updated upstream
const AnimeFullInfo: FC<AnimeFullInfoProps> = ({anime}) => {
    const {attributes} = anime;
    const status = getStatusTranslate(attributes.status);
    let nextRelease;

    if (anime.attributes.nextRelease === null) {
        if (status === "Завершено")
            nextRelease = "Релиз завершён";
        else
            nextRelease = "Неизвестно";
    } else
        nextRelease = formatToLongDate(attributes.nextRelease);

    return (
        <div className={"animeFullInfo"}>
            <div className={"left-part"}>
                <img src={attributes.posterImage.small} alt={"Poster"}/>
                {attributes.averageRating &&
                    <InfoItem name={"Средний рейтинг"}
                              description={`${attributes.averageRating}`}
                              type={"rating"}/>
                }
                {attributes.popularityRank &&
                    <InfoItem name={"Место по популярности"}
                              description={`${attributes.popularityRank}`}
                              type={"rating"}/>
                }
                {attributes.ratingRank &&
                    <InfoItem name={"Место по рейтингу"}
                              description={`${attributes.ratingRank}`}
                              type={"rating"}/>
                }
                {Boolean(attributes.userCount) &&
                    <InfoItem name={"Количество пользователей"}
                              description={`${attributes.userCount}`}
                              type={"rating"}/>
                }
                {Boolean(attributes.favoritesCount) &&
                    <InfoItem name={"В избранном"}
                              description={`${attributes.favoritesCount}`}
                              type={"rating"}/>
                }
            </div>
            <div className={"right-part"}>
                <div className={"titles"}>
                    <h2>{attributes.canonicalTitle}</h2>
                    <h3>{attributes.titles.en}</h3>
                    <h3>{attributes.titles.ja_jp}</h3>
                </div>
                <hr/>
                <div className={"info-item"}>
                    <p className={"info-names"}>Следующий эпизод</p>
                    <p className={"info-descriptions"}>{nextRelease}</p>
                </div>
                <hr/>
                <div className={"info"}>
                    <InfoItem name={`Тип`}
                              description={`${getShowTypeTranslate(attributes.showType)}`}
                              type={"information"}/>
                    <InfoItem name={`Статус`}
                              description={status}
                              type={"information"}/>
                    <InfoItem name={`Выпуск`}
                              description={`${formatToLongDate(attributes.startDate)}`}
                              type={"information"}/>
                    <InfoItem name={`Рейтинг MPAA`}
                              description={`${attributes.ageRating}`}
                              descriptionTip={`${attributes.ageRatingGuide}`}
                              type={"information"}/>
                    <InfoItem name={`ageRatingGuide`}
                              description={`${attributes.ageRatingGuide}`}
                              type={"information"}/>
                    {attributes.episodeLength &&
                        <InfoItem name={`Длительность`}
                                  description={`${attributes.episodeLength} мин. ~ серия`}
                                  type={"information"}/>
                    }
                    {Boolean(attributes.totalLength) &&
                        <InfoItem name={`Полный просмотр`}
                                  description={`~ ${attributes.totalLength} мин.`}
                                  type={"information"}/>
                    }
                    <p>{attributes.description}</p>
                </div>
            </div>
        </div>
    );
=======
const AnimeFullInfo: FC<AnimeFullInfoProps> = ({ anime }) => {
	const { attributes } = anime;

	return (
		<div className={"animeFullInfo"}>
			<div className={"left-part"}>
				<img src={attributes.posterImage.small} alt={"Poster"} />
				{attributes.averageRating && <InfoItem name={"Средний рейтинг"} description={`${attributes.averageRating}`} />}
				{attributes.popularityRank && <InfoItem name={"Место по популярности"} description={`${attributes.popularityRank}`} />}
				{attributes.ratingRank && <InfoItem name={"Место по рейтингу"} description={`${attributes.ratingRank}`} />}
				{Boolean(attributes.userCount) && <InfoItem name={"Количество пользователей"} description={`${attributes.userCount}`} />}
				{Boolean(attributes.favoritesCount) && <InfoItem name={"В избранном"} description={`${attributes.favoritesCount}`} />}
			</div>
			<div className={"right-part"}>
				<div className={"titles"}>
					<h2>{attributes.canonicalTitle}</h2>
					<h3>{attributes.titles.en}</h3>
					<h3>{attributes.titles.ja_jp}</h3>
				</div>
				<hr />
				<div className={"info-item"}>
					<p className={"info-names"}>Следующий эпизод</p>
					<p className={"info-descriptions"}>{formatToLongDate(attributes.nextRelease)}</p>
				</div>
				<hr />
				<div className={"info"}>
					<InfoItem name={`Тип`} description={`${getShowTypeTranslate(attributes.showType)}`} />
					<InfoItem name={`Статус`} description={`${getStatusTranslate(attributes.status)}`} />
					<InfoItem name={`Выпуск`} description={`${formatToLongDate(attributes.startDate)}`} />
					<InfoItem name={`Рейтинг MPAA`} description={`${attributes.ageRating}`} />
					<InfoItem name={`ageRatingGuide`} description={`${attributes.ageRatingGuide}`} />
					{attributes.episodeLength && <InfoItem name={`Длительность`} description={`${attributes.episodeLength} мин. ~ серия`} />}
					{Boolean(attributes.totalLength) && <InfoItem name={`Полный просмотр`} description={`~ ${attributes.totalLength} мин.`} />}
					<p>{attributes.description}</p>
				</div>
			</div>
		</div>
	);
>>>>>>> Stashed changes
};

export default AnimeFullInfo;
