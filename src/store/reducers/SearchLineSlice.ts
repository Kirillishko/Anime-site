import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISearch} from "../../models/ISearch";
import {IPagination} from "../../models/IPagination";
import {IAnimeDatas} from "../../models/Anime/IAnimeDatas";
import {IAnimeData} from "../../models/Anime/IAnimeData";
import formatSearchToString from "../../helpers/searchFormatter";

interface ISearchLine {
    search: ISearch,
    result: IAnimeData[],
    fullLine: string,
}

const initialState: ISearchLine = {
    search: {pagination: {limit: 1, offset: 0},
            title: "",
            categories: "",
            status: "",
            showType: "",
            sort: "",},
    result: [],
    fullLine: "",
}

const SearchLineSlice = createSlice({
    name: "SearchLineSlice",
    initialState,
    reducers: {
        setPagination(state, action: PayloadAction<IPagination>) {
            state.search.pagination = action.payload;
            state.fullLine = formatSearchToString(state.search);
        },
        setTitle(state, action: PayloadAction<string>) {
            state.search.title = action.payload;
            state.fullLine = formatSearchToString(state.search);
        },
        setCategories(state, action: PayloadAction<string>) {
            state.search.categories = action.payload;
            state.fullLine = formatSearchToString(state.search);
        },
        setStatus(state, action: PayloadAction<string>) {
            state.search.status = action.payload;
            state.fullLine = formatSearchToString(state.search);
        },
        setShowType(state, action: PayloadAction<string>) {
            state.search.showType = action.payload;
            state.fullLine = formatSearchToString(state.search);
        },
        setSort(state, action: PayloadAction<string>) {
            state.search.sort = action.payload;
            state.fullLine = formatSearchToString(state.search);
        },
        setResult(state, action: PayloadAction<IAnimeData[]>) {
            state.result = action.payload;
        },
    }
})

export const {setPagination, setTitle, setCategories, setStatus, setShowType, setSort, setResult} = SearchLineSlice.actions;
export const SearchLineSliceReducer = SearchLineSlice.reducer;