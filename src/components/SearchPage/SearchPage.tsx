import React, {ReactNode} from 'react';
import SliderInput from "./SliderInput";
import {categoriesTranslateArray} from "../../translate/Translates";
import {
    Checkbox, createTheme,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent, ThemeProvider
} from "@mui/material";

const SearchPage = () => {
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

    const [categories, setCategories] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof categories>) => {
        const {
            target: { value },
        } = event;

        setCategories(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const theme = createTheme({
        palette: {
            primary: {
                // light: will be calculated from palette.primary.main,
                main: '#ffa6a3',
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                main: '#495057'
            }
        },
    });

    return (
        <div>
            <ThemeProvider theme={theme}>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label" color={"secondary"}>Категории</InputLabel>
                    <Select
                        multiple
                        value={categories}
                        onChange={handleChange}
                        input={<OutlinedInput label="Категории"/>}
                        renderValue={(selected) => {
                            selected = selected.sort();
                            return selected.join(', ')}
                        }
                        MenuProps={MenuProps}
                    >
                        {categoriesTranslateArray.map((category) => (
                            <MenuItem key={category[1]} value={category[1]}>
                                <Checkbox checked={categories.indexOf(category[1]) > -1} />
                                <ListItemText primary={category[1]} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </ThemeProvider>
        </div>

    // return (
    //     <div className={"search-page"}>
    //         <div className={"search-left"}>
    //             <div className={"search-input"}>
    //                 <input type={"search"} value={"Введите аниме.."}/>
    //             </div>
    //             <div className={"search-content"}>Контент</div>
    //         </div>
    //         <div className={"search-right"}>
    //             {/*<div className={"search-categories"}>*/}
    //             {/*    <button>*/}
    //             {/*        <ul>*/}
    //             {/*            {categoriesTranslateArray.map(value =>*/}
    //             {/*                <li>{value[1]}</li>*/}
    //             {/*            )}*/}
    //             {/*        </ul>*/}
    //             {/*    </button>*/}
    //             {/*</div>*/}
    //             <div className="drop">
    //                 <p>Меню</p>
    //                 <div className="dropdown_block">
    //                     <ul>
    //                         <li>Один</li>
    //                         <li>Два</li>
    //                         <li>Три</li>
    //                         <li>Четыре</li>
    //                         <li>
    //                             <button/>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    );
};

export default SearchPage;

// <div className="drop">
//     <p>Меню</p>
//     <div className="dropdown_block">
//         <ul>
//             <li>Один</li>
//             <li>Два</li>
//             <li>Три</li>
//             <li>Четыре</li>
//             <li>
//                 <button>
//                     Кам
//                     <input type="checkbox">
//                         <button/>
//             </li>
//         </ul>
//     </div>
// </div>

// .drop {
//     display: inline-block;
//     width: 150px;
//     height: 30px;
//     position: relative;
//     color: #fff;
// }
//
// .drop p {
//     display: block;
//     width: 100%;
//     height: 30px;
//     line-height: 30px;
//     margin: 0;
//     padding: 0 10px;
//     box-sizing: border-box;
//     background: gray;
// }
//
// .drop .dropdown_block {
//     display: none;
//     width: 100%;
//     position: absolute;
//     top: 30px;
//     left: 0;
//     right: 0;
// }
//
// .drop:hover .dropdown_block,
// .dropdown_block:hover {
//     display: block;
// }
//
// .drop ul {
//     display: block;
//     width: 100%;
//     background: gray;
//     padding: 0;
//     margin: 10px 0 0;
//     list-style: none;
//     max-height: 90px;
//     overflow: hidden auto;
// }
//
// .drop li {
//     display: block;
//     width: 100%;
//     height: 30px;
//     line-height: 30px;
//     padding: 0 10px;
//     box-sizing: border-box;
// }
//
// .drop li:hover {
//     background: #555;
//     cursor: pointer;
// }