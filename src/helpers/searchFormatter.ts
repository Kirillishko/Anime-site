import {ISearch} from "../models/ISearch";

const formatSearchToString = (search: ISearch) => {
    const {pagination, title, categories, status, showType, sort} = search;
    let paginationPart, titlePart, categoriesPart, statusPart, showTypePart, sortPart;
    paginationPart = titlePart = categoriesPart = statusPart = showTypePart = sortPart = "";

    if (pagination)
        paginationPart = `page[limit]=${pagination.limit}&page[offset]=${pagination.offset}&`;

    if (title)
        titlePart = `filter[text]=${title}&`;

    if (categories)
        categoriesPart = `filter[categories]=${categories}&`;

    if (status)
        statusPart = `filter[status]=${status}&`;

    if (status)
        showTypePart = `filter[showType]=${showType}&`;

    if (sort)
        sortPart = `sort=-${sort}&`;

    const result = paginationPart + titlePart + categoriesPart + statusPart + showTypePart + sortPart + "include=categories";

    return result;
}

export default formatSearchToString;