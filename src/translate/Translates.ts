const categoriesTranslate = new Map([
        // ["absurdist-humour", "Абсурдный юмор"],
        // ["action", "Экшн"],
        ["adventure", "Приключения"],
        // ["africa", "Африка"],
        // ["ahegao", "Ахегао"],
        // ["air-force", "Воздушные силы"],
        ["alien", "Пришельцы"],
        ["all-girls-school", "Школа для девочек"],
        // ["alternative-past", "Альтернативное прошлое"],
        // ["alternative-present", "Альтернативное настоящее"],
        // ["americas", "Америка"],
        // ["anal", "Анал"],
        // ["android", "Андроид"],
        // ["angel", "Ангел"],
        // ["angst", "Тоска"],
        // ["anime-influenced", "Под влиянием аниме"],
        // ["anthropomorphism", "Антропоморфизм"],
        // ["anti-war", "Анти-война"],
        // ["asia", "Азия"],
        // ["assassin", "Ассассин"],
        // ["bakumatsu-meiji-period", "Период Бакумацу - Мэйдзи"],
        // ["baseball", "Бейсбол"],
        // ["basketball", "Баскетболл"],
        // ["battle-royale", "Баттл Рояль"],
        // ["bdsm", "БДСМ"],
        ["bishounen", "Бисёнэн"],
        // ["blackmail", "Шантаж"],
        // ["bondage", "Бондаж"],
        // ["bounty-hunter", "Охотник за головами"],
        // ["boxing", "Бокс"],
        // ["breaking-the-fourth-wall", "Ломание четвёртой стены"],
        // ["buddhism", "Буддизм"],
        // ["card-games", "Карточные игры"],
        // ["china", "Китай"],
        // ["combat", "Сражения"],
        ["comedy", "Комедия"],
        // ["coming-of-age", "Совершеннолетие"],
        // ["conspiracy", "Конспирология"],
        // ["contemporary-fantasy", "Современное фэнтези"],
        // ["content-indicators", "Индикаторы контента"],
        // ["cooking", "Готовка"],
        // ["cops", "Полицейские"],
        // ["countryside", "Сельская местность"],
        // ["crime", "Преступление"],
        // ["cross-dressing", "Переодевание"],
        // ["cyberpunk", "Киберпанк"],
        // ["cyborg", "Киборг"],
        // ["cycling", "Велоспорт"],
        ["dark-fantasy", "Тёмное фэнтези"],
        // ["dark-skinned-girl", "Темнокожая девушка"],
        // ["deity", "Божественность"],
        // ["delinquent", "Правонарушение"],
        // ["dementia", "Деменция"],
        // ["demon", "Демон"],
        // ["desert", "Пустыня"],
        ["detective", "Детектив"],
        // ["disaster", "Катастрофа"],
        // ["dragon", "Дракон"],
        ["drama", "Драма"],
        // ["drifting", "Дрифт"],
        // ["dynamic", "Динамика"],
        // ["dystopia", "Дистопия"],
        // ["earth", "Земля"],
        ["ecchi", "Этти"],
        // ["elementary-school", "Младшая школа"],
        // ["elements", "Элементы"],
        // ["elf", "Эльф"],
        // ["epidemic", "Эпидемия"],
        // ["erotic-torture", "Эротические пытки"],
        // ["europe", "Европа"],
        // ["family", "Семья"],
        ["fantasy", "Фэнтези"],
        // ["fantasy-world", "Мир фэнтези"],
        // ["female-student", "Студентка"],
        // ["female-teacher", "Учительница"],
        // ["femdom", "Фемдом"],
        // ["fetishes", "Фетиши"],
        // ["feudal-warfare", "Феодальная война"],
        // ["floating-island", "Плавающий остров"],
        // ["formula-racing", "Гонки формулы"],
        // ["france", "Франция"],
        // ["friendship", "Дружба"],
        // ["future", "Будущее"],
        // ["gender-bender", "Гендерный изгиб"],
        // ["genetic-modification", "Генетическая модификация"],
        // ["germany", "Германия"],
        // ["ghost", "Призрак"],
        // ["gigantic-breasts", "Гигантская грудь"],
        // ["gunfights", "Перестрелки"],
        ["harem", "Гарем"],
        // ["heian-period", "Период Хэйан"],
        // ["henshin", "Трансформирование"],
        // ["high-fantasy", "Высокое фэнтези"],
        ["high-school", "Старшая школа"],
        // ["historical", "Историческое"],
        // ["horror", "Хоррор"],
        // ["housewives", "Домохозяйки"],
        // ["human-enhancement", "Улучшение человека"],
        // ["humanoid-alien", "Человекоподобный пришелец"],
        // ["idol", "Идол"],
        // ["incest", "Инцест"],
        ["isekai", "Исекай"],
        // ["island", "Остров"],
        // ["italy", "Италия"],
        // ["japan", "Япония"],
        ["josei", "Дзёсэй"],
        ["juujin", "Фурри"],
        // ["kids", "Дети"],
        // ["korea", "Корея"],
        // ["kyoto", "Киото"],
        // ["lactation", "Лактация"],
        // ["large-breasts", "Большая грудь"],
        // ["law-and-order", "Закон и порядок"],
        // ["lingerie", "Женское белье"],
        // ["loli", "Лоли"],
        // ["love-polygon", "Полигон любви"],
        ["mafia", "Мафия"],
        ["magic", "Магия"],
        ["magical-girl", "Девочка-волшебница"],
        // ["maid", "Служанка"],
        // ["mars", "Марс"],
        ["martial-arts", "Боевые искусства"],
        // ["masturbation", "Мастурбация"],
        // ["mecha", "Меха"],
        // ["mermaid", "Русалка"],
        // ["middle-east", "Средний Восток"],
        // ["middle-school", "Средняя школа"],
        // ["military", "Военные"],
        // ["motorsport", "Автоспорт"],
        // ["music", "Музыка"],
        ["musical-band", "Музыкальная группа"],
        // ["mystery", "Таинственность"],
        // ["navy", "Военно-морской флот"],
        // ["netorare", "Измена"],
        // ["new-york", "Нью-Йорк"],
        ["ninja", "Ниндзя"],
        // ["nudity", "Нагота"],
        // ["nurse", "Медсестра"],
        // ["office-lady", "Офисная леди"],
        // ["other-planet", "Другая планета"],
        // ["pantsu", "Панцу"],
        // ["parallel-universe", "Параллельная вселенная"],
        // ["parasite", "Паразит"],
        // ["parental-abandonment", "Отказ от родителей"],
        ["parody", "Пародия"],
        // ["past", "Прошлое"],
        ["performance", "Спектакль"],
        // ["piloted-robot", "Пилотируемый робот"],
        // ["pirate", "Пираты"],
        // ["plot-continuity", "Продолжение сюжета"],
        // ["politics", "Политика"],
        ["post-apocalypse", "Постапокалипсис"],
        // ["power-suit", "Силовой костюм"],
        // ["present", "Настоящее"],
        // ["prostitution", "Проституция"],
        // ["proxy-battles", "Бой чужими руками"],
        ["psychological", "Психология"],
        // ["public-sex", "Публичный секс"],
        // ["rape", "Изнасилование"],
        // ["religion", "Религия"],
        ["revenge", "Месть"],
        ["reverse-harem", "Обратный гарем"],
        // ["robot", "Робот"],
        // ["robot-helper", "Робот помощник"],
        ["romance", "Романтика"],
        // ["rotten-world", "Прогнивший мир"],
        // ["russia", "Россия"],
        // ["samurai", "Самураи"],
        // ["satire", "Сатира"],
        // ["school-clubs", "Школьные клубы"],
        ["school-life", "Школьная жизнь"],
        ["science-fiction", "Научная фантастика"],
        ["seinen", "Сэйнэн"],
        // ["sengoku-period", "Период Сэнгоку"],
        // ["setting", "Сеттинг"],
        // ["sex", "Секс"],
        // ["sex-toys", "Секс игрушки"],
        // ["sexual-abuse", "Сексуальное насилие"],
        // ["sexual-fantasies", "Сексуальные фантазии"],
        // ["shinsengumi", "Синсэнгуй"],
        // ["shipboard", "Корабли"],
        // ["shota", "Шота"],
        ["shoujo", "Сёдзё"],
        ["shoujo-ai", "Сёдзё-ай"],
        ["shounen", "Сёнэн"],
        ["shounen-ai", "Сёнэн-ай"],
        // ["slapstick", "Фарс"],
        // ["slavery", "Рабство"],
        // ["slice-of-life", "Слайс"],
        // ["slow-when-it-comes-to-love", "Медленно, когда дело доходит до любви"],
        // ["small-breasts", "Маленькая грудь"],
        // ["soccer", "Футбол"],
        ["space", "Космос"],
        // ["space-battles", "Космические битвы"],
        // ["space-opera", "Космическая опера"],
        // ["space-travel", "Космическое путешествие"],
        // ["special-squads", "Специальные отряды"],
        ["sports", "Спорт"],
        // ["steampunk", "Стимпанк"],
        // ["stereotypes", "Стереотипы"],
        // ["street-racing", "Уличные гонки"],
        // ["student-government", "Студенческое правительство"],
        // ["sudden-girlfriend-appearance", "Внезапное появление девушки"],
        // ["summer", "Лето"],
        // ["super-deformed", "Чиби"],
        ["super-power", "Суперсилы"],
        // ["super-robot", "Супер-робот"],
        // ["superhero", "Супергерои"],
        ["supernatural", "Сверхъестественное"],
        // ["swordplay", "Фехтование"],
        // ["target-demographics", "Целевая аудитория"],
        // ["teacher-x-student", "Учитель × Студент"],
        // ["tennis", "Теннис"],
        // ["tentacle", "Тентакли"],
        // ["the-arts", "Искусство"],
        // ["themes", "Темы"],
        // ["thievery", "Воровство"],
        // ["three-kingdoms", "Три королевства"],
        ["thriller", "Триллер"],
        ["time-travel", "Путешествия во времени"],
        // ["tokugawa-period", "Период Токугава"],
        // ["tokyo", "Токио"],
        // ["tone-changes", "Изменения тона"],
        // ["transforming-craft", "Трансформирующее ремесло"],
        // ["united-kingdom", "Великобритания"],
        // ["united-states", "США"],
        // ["university", "Университет"],
        // ["unrequited-love", "Неразделенная любовь"],
        ["vampire", "Вампир"],
        // ["victorian-period", "Викторианская эпоха"],
        ["violence", "Насилие"],
        // ["violent-retribution-for-accidental-infringement", "Насильственное возмездие за случайное нарушение"],
        ["virtual-reality", "Виртуальная реальность"],
        // ["volleyball", "Волейбол"],
        // ["voyeurism", "Половое извращение"],
        // ["waitress", "Официантка"],
        // ["war", "Война"],
        // ["working-life", "Срок службы"],
        // ["world-war-ii", "Вторая Мировая Война"],
        // ["wrestling", "Реслинг"],
        ["yaoi", "Яой"],
        ["yuri", "Юри"],
        ["zombie", "Зомби"],
    ],
);

const showTypesTranslate = new Map([
    // ["All", "Все"],
    ["movie", "Фильм"],
    ["music", "Клип"],
    ["ona", "ONA"],
    ["ova", "OVA"],
    ["special", "Спешл"],
    ["tv", "ТВ"],
]);

const statusTranslate = new Map([
    ["current", "Онгоинг"],
    ["finished", "Завершено"],
    ["tba", "Не объявлено"],
    ["unreleased", "Не выпущено"],
    ["upcoming", "Скоро"],
]);

const ageRatingsTranslate = new Map([
        ["G", "G"],
        ["PG", "PG"],
        ["R", "R"],
]);

const sortTranslate = new Map([
    ["-created_at", "Недавно добавленные"],
    ["-start_date", "Дата"],
    ["-user_count", "Популярность"],
    ["-average_rating", "Средняя оценка"],
]);

const sort = (n1 : string[], n2: string[]) => {
    if (n1[1] > n2[1]) {
        return 1;
    }

    if (n1[1] < n2[1]) {
        return -1;
    }

    return 0;
};

const getTranslate = (map: Map<string, string>, expression: string):string => {
    if (expression === undefined)
        return "error";

    if (expression === "")
        return expression;

    let result = "";

    // if (expression.match(/[A-Z]/i))
    //     result = map.get(expression.replace(/\s/g, "-").toLowerCase())!;
    // else
        map.forEach((value, key) => {
            // const orig = value.toLowerCase();
            // const tran = category.toLowerCase();
            // const cm1 = orig == tran;
            // const cm2 = orig === tran;

            if (value.toLowerCase() === expression.toLowerCase()) {
                result = key;
                return;
            }

            if (key.toLowerCase() === expression.toLowerCase())
            {
                result = value;
                return;
            }
        });

    return result;
}

export const getCategoryTranslate = (category: string): string => getTranslate(categoriesTranslate, category);
export const getShowTypeTranslate = (showType: string): string => getTranslate(showTypesTranslate, showType);
export const getStatusTranslate = (status: string): string => getTranslate(statusTranslate, status);
export const getAgeRatingsTranslate = (ageRating: string): string => getTranslate(ageRatingsTranslate, ageRating);
export const getSortTranslate = (sort: string): string => getTranslate(sortTranslate, sort);

export const categoriesTranslateArray = Array.from(categoriesTranslate).sort(sort);
export const showTypesTranslateArray = Array.from(showTypesTranslate).sort(sort);
export const statusTranslateArray = Array.from(statusTranslate).sort(sort);
export const ageRatingsTranslateArray = Array.from(ageRatingsTranslate).sort(sort);
export const sortTranslateArray = Array.from(sortTranslate);