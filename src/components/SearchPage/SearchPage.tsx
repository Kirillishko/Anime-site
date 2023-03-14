import React from 'react';
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
import {categoriesTranslateArray, showTypesTranslateArray, statusTranslateArray} from "../../translate/Translates";

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

    return (
        <div className={"search-page"}>
            <div className={"search-left"}>
                <div className={"search-top"}>
                    <div className={"search-top-left"}>
                        <h1>Список аниме</h1>
                    </div>
                    <div className={"search-top-right"}>
                        <ThemeProvider theme={theme}>
                            <FormControl sx={{m: 1, width: 300}}>
                                <InputLabel color={"secondary"}>Сортировка</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    input={<OutlinedInput label="Сотировка"/>}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </ThemeProvider>
                    </div>
                </div>
                <div className={"search-content"}>Контент</div>
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
                            />
                        </FormControl>
                        <Dropdown label={"Жанры"} items={categoriesTranslateArray}/>
                        <Dropdown label={"Тип"} items={showTypesTranslateArray}/>
                        <Dropdown label={"Статус"} items={statusTranslateArray}/>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;