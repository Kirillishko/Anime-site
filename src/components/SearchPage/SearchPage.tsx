import React, {ChangeEvent, ChangeEventHandler, useEffect} from 'react';
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

    const {filter} = useParams();
    const navigate = useNavigate();
    const [searchTitle, setSearchTitle] = React.useState("");
    const {search, result} = useAppSelector(state => state.searchLineReducer);

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTitle(value);
        setTitle(value);
    }

    let data, error, isLoading;

    const formattedSearch = formatSearchToString(search);
    console.log("formattedSearch: " + formattedSearch);
    console.log("filter: " + filter + "   " + (formattedSearch === filter));

    let toUpdate = false;

    if (formattedSearch === filter) {
        const result = animeApi.useFetchAnimeSearchStraightQuery(formattedSearch);
        data = result.data;
        error = result.error;
        isLoading = result.isLoading;
    } else {
        // toUpdate = true;
    }

    useEffect(() => {
        navigate(`/search/filter/${formattedSearch}`, {replace: true});
        toUpdate = false;
    }, [toUpdate]);

    console.log("data: " + data);

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
                    {isLoading && "Загрузка..."}
                    {Array.isArray(data) && data.data.map(value =>
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