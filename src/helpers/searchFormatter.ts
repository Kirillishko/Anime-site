import {ISearch} from "../models/ISearch";
import {
    getAgeRatingsTranslate,
    getCategoryTranslate,
    getShowTypeTranslate,
    getSortTranslate,
    getStatusTranslate
} from "../translate/Translates";

const formatSearchToString = (search: ISearch) => {
    let {pagination, title, categories, status, ageRating, sort} = search;
    let paginationPart, titlePart, categoriesPart, statusPart, ageRatingPart, sortPart;
    paginationPart = titlePart = categoriesPart = statusPart = ageRatingPart = sortPart = "";

    categories = categories.split(",").map(value => getCategoryTranslate(value)).toString();
    status = status.split(",").map(value => getStatusTranslate(value)).toString();
    ageRating = ageRating.split(",").map(value => getAgeRatingsTranslate(value)).toString();
    sort = sort.split(",").map(value => getSortTranslate(value)).toString();

    if (pagination)
        paginationPart = `page[limit]=${pagination.limit}&page[offset]=${pagination.offset}&`;

    if (title)
        titlePart = `filter[text]=${title}&`;

    if (categories)
        categoriesPart = `filter[categories]=${categories}&`;

    if (status)
        statusPart = `filter[status]=${status}&`;

    if (ageRating)
        ageRatingPart = `filter[ageRating]=${ageRating}&`;

    if (sort)
        sortPart = `sort=${sort}&`;

    const result = (paginationPart + titlePart + categoriesPart + statusPart + ageRatingPart + sortPart).slice(0, -1);

    return result;
}

export default formatSearchToString;