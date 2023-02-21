import {ICategoryAttributes} from "./ICategoryAttributes";

export interface ICategories {
    data : {
        id: string,
        attributes : ICategoryAttributes,
    }[],
}