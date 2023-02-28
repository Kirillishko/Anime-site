import React from 'react';
import Dropdown from "./Dropdown";
import {categoriesTranslateArray, showTypesTranslateArray, statusTranslateArray} from "../../translate/Translates";
import {TextField} from "@mui/material";

const SearchPage = () => {

    return (
        <div className={"search-page"}>
            <div className={"search-left"}>
                <div className={"search-input"}>
                    <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                    />
                </div>
                <div className={"search-content"}>Контент</div>
            </div>
            <div className={"search-right"}>
                <div className={"search-categories"}>
                    <Dropdown label={"Жанры"} items={categoriesTranslateArray}/>
                    <Dropdown label={"Тип"} items={showTypesTranslateArray}/>
                    <Dropdown label={"Статус"} items={statusTranslateArray}/>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;