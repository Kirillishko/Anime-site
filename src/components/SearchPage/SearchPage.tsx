import React from 'react';
import SliderInput from "./SliderInput";
import {Slider} from "@mui/material";
import {categoriesTranslateArray} from "../../translate/CategoriesTranslate";

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
                    <button>
                        <ul>
                            {categoriesTranslateArray.map(value =>
                                <li>{value[1]}</li>
                            )}
                        </ul>
                    </button>
                </div>
            </div>
        </div>
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
//     display: lock;
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