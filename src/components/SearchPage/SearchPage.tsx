import React from 'react';
import SliderInput from "./SliderInput";
import {Slider} from "@mui/material";

const SearchPage = () => {


    return (
        <div className={"search-page"}>
            <div className={"search-left"}>
                <div className={"search-input"}>
                    <input type={"search"} value={"Введите аниме.."}/>
                </div>
                <div className={"search-content"}>Контент</div>
            </div>
            <div className={"search-right"}>
                <div className={"search-categories"}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        min={1}
                        max={10}
                        valueLabelDisplay="auto"
                        getAriaValueText={(value, index) => "asd"}
                        color="primary"

                    />
                </div>
            </div>
        </div>
    );
};

export default SearchPage;