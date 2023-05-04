import React, {ChangeEvent, ChangeEventHandler, memo, useEffect, useState} from 'react';
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
    statusTranslateArray
} from "../../translate/Translates";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setTitle, setPagination, setResult} from "../../store/reducers/SearchLineSlice";
import {SelectChangeEvent} from "@mui/material/Select";
import {IAnimeDatas} from "../../models/Anime/IAnimeDatas";
import {animeApi} from "../../services/AnimeService";
import AnimePreview from "./AnimePreview";
import {useNavigate, useParams} from "react-router-dom";
import formatSearchToString from "../../helpers/searchFormatter";

const SearchPage = () => {
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

    const dispatch = useAppDispatch();

    const {filter} = useParams();
    const navigate = useNavigate();
    const [searchTitle, setSearchTitle] = React.useState("");
    const {search, result} = useAppSelector(state => state.searchLineReducer);
    const {title, status, sort, showType, categories, pagination} = search;
    const formattedSearch = formatSearchToString(search);
    const [getData, {data, isFetching, error}] = animeApi.useLazyFetchAnimeSearchStraightQuery();
    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // console.log(value);

        setSearchTitle(value);
        dispatch(setTitle(value));

        // console.log(title);
    }

    // console.log("formattedSearch: " + formattedSearch);
    // console.log("filter: " + filter + "   " + (formattedSearch === filter));

    const [fullFilled, setFullFilled] = useState(false);

    const cum2 = new Promise((resolve, reject) => {
      setTimeout(() => {
          // console.log("1");
      }, 1000);
    });

    let cum1 = setTimeout(() => {
        navigate(`/search/filter/${formattedSearch}`, {replace: true});
        console.log("update");
        getData(formattedSearch);
    }, 3000);


    useEffect(() => {
        clearTimeout(cum1);
        cum1 = setTimeout(() => {
            navigate(`/search/filter/${formattedSearch}`, {replace: true});
            console.log("update");
            getData(formattedSearch);
        }, 1000)
    }, [title, status, sort, showType, categories, pagination]);

    // console.log(data);

    return (
        <div className={"search-page"}>
            <div className={"search-left"}>
                <div className={"search-top"}>
                    <div className={"search-top-left"}>
                        <h1>Список аниме</h1>
                    </div>
                    <div className={"search-top-right"}>
                        <ThemeProvider theme={theme}>
                            <Dropdown label={"Сортировка"} items={sortTranslateArray}
                                      multiple={false} action={"setSort"}/>
                        </ThemeProvider>
                    </div>
                </div>
                <div className={"search-content"}>
                    {error && "Ошибка"}
                    {isFetching && "Загрузка..."}
                    {Array.isArray(data) && data.map(value =>
                        <AnimePreview animeData={value}/>
                    )}
                </div>
            </div>
            <div className={"search-right"}>
                <div className={"search-categories"}>
                    <ThemeProvider theme={theme}>
                        <FormControl sx={{m: 1, width: 300}}>
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
                        <Dropdown label={"Тип"} items={showTypesTranslateArray} multiple={true} action={"setShowType"}/>
                        <Dropdown label={"Статус"} items={statusTranslateArray} multiple={true} action={"setStatus"}/>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;