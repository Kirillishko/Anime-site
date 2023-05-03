import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISearch} from "../../models/ISearch";
import {IPagination} from "../../models/IPagination";
import {IAnimeDatas} from "../../models/Anime/IAnimeDatas";
import {IAnimeData} from "../../models/Anime/IAnimeData";

interface ISearchLine {
    search: ISearch,
    result: IAnimeData[],
}

const initialState: ISearchLine = {
    search: {pagination: {offset: 0, limit: 0},
            title: "",
            categories: "",
            status: "",
            showType: "",
            sort: "",},
    result: [],
}

const SearchLineSlice = createSlice({
    name: "SearchLineSlice",
    initialState,
    reducers: {
        setPagination(state, action: PayloadAction<IPagination>) {
            state.search.pagination = action.payload;
        },
        setTitle(state, action: PayloadAction<string>) {
            state.search.title = action.payload;
        },
        setCategories(state, action: PayloadAction<string>) {
            state.search.categories = action.payload;
        },
        setStatus(state, action: PayloadAction<string>) {
            state.search.status = action.payload;
        },
        setShowType(state, action: PayloadAction<string>) {
            state.search.showType = action.payload;
        },
        setSort(state, action: PayloadAction<string>) {
            state.search.sort = action.payload;
        },
        setResult(state, action: PayloadAction<IAnimeData[]>) {
            state.result = action.payload;
        },
    }
})

export const {setPagination, setTitle, setCategories, setStatus, setShowType, setSort, setResult} = SearchLineSlice.actions;
export const SearchLineSliceReducer = SearchLineSlice.reducer;