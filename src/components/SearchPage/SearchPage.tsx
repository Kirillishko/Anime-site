import React, {ChangeEvent, ChangeEventHandler, memo, useCallback, useEffect, useRef, useState} from 'react';
import {
    createTheme,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    ThemeProvider
} from "@mui/material";
import Dropdown from "./Dropdown";
import {
    categoriesTranslateArray,
    sortTranslateArray,
    showTypesTranslateArray,
    statusTranslateArray, ageRatingsTranslateArray
} from "../../translate/Translates";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setTitle, setPagination, setResult} from "../../store/reducers/SearchLineSlice";
import {SelectChangeEvent} from "@mui/material/Select";
import {IAnimeDatas} from "../../models/Anime/IAnimeDatas";
import {animeApi} from "../../services/AnimeService";
import AnimePreview from "./AnimePreview";
import {useNavigate, useParams} from "react-router-dom";
import formatSearchToString from "../../helpers/searchFormatter";
import {TIMEOUT} from "dns";
import useDebounce from "../../hooks/useDebounce";
import tableImage from "../../images/grouping/table.png";
import twoColumnImage from "../../images/grouping/twoColumn.png";
import listImage from "../../images/grouping/list.png";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffa6a3',
        },
        secondary: {
            main: '#495057'
        }
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 0,
        },
    },
};

const SearchPage = () => {

    const dispatch = useAppDispatch();
    const {filter} = useParams();
    const navigate = useNavigate();
    const [searchTitle, setSearchTitle] = React.useState("");
    const {search, result} = useAppSelector(state => state.searchLineReducer);
    const {title, status, sort, ageRating, categories, pagination} = search;
    const formattedSearch = formatSearchToString(search);
    const [getData, {data, isFetching, error}] = animeApi.useLazyFetchAnimeSearchStraightQuery();

    const fetch = () => {
        navigate(`/search/filter/${formattedSearch}`, {replace: true});
        getData(formattedSearch);
    };

    const debouncedSearch = useDebounce(fetch, 1000);

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTitle(value);
        dispatch(setTitle(value));
    }

    useEffect(() => {
        debouncedSearch();
    }, [title, status, sort, ageRating, categories, pagination]);

    return (
        <div className={"search-page"}>
            <div className={"search-left"}>
                <div className={"search-top"}>
                    <h1>Список аниме</h1>
                    <div className={"search-top-sort"}>
                        <div className={"search-top-sort-sorting"}>
                            <p>Сортировать по: </p>
                            <ThemeProvider theme={theme}>
                                <Dropdown label={"Сортировка"} items={sortTranslateArray}
                                          multiple={false} action={"setSort"}/>
                            </ThemeProvider>
                        </div>
                        <div className={"search-top-sort-grouping"}>
                            <button className={"active"}><img src={tableImage} alt={"table"}/></button>
                            <button><img src={twoColumnImage} alt={"table"}/></button>
                            <button><img src={listImage} alt={"table"}/></button>
                        </div>
                    </div>
                </div>
                <div className={"search-content"}>
                    {error && "Ошибка"}
                    {isFetching && "Загрузка..."}
                    {data && data.data.map(value =>
                        <AnimePreview key={value.id} anime={value}/>
                    )}
                </div>
            </div>
            <div className={"search-right"}>
                <div className={"search-categories"}>
                    <ThemeProvider theme={theme}>
                        <FormControl sx={{m: 1, width: '100%', boxSizing: 'border-box', margin: 0}}>
                            <TextField
                                id="filled-search"
                                label="Поиск"
                                type="search"
                                variant="filled"
                                value={searchTitle}
                                onChange={onChangeTitle}
                            />
                        </FormControl>
                        <Dropdown label={"Жанры"} items={categoriesTranslateArray} multiple={true} action={"setCategories"}/>
                        <Dropdown label={"Статус"} items={statusTranslateArray} multiple={true} action={"setStatus"}/>
                        <Dropdown label={"Возрастной рейтинг"} items={ageRatingsTranslateArray} multiple={true} action={"setAgeRating"}/>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;