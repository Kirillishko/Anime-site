import React from 'react';
import "./styles/html.css"
import "./styles/header.css"
import "./styles/animeMain.css"
import "./styles/animePage.css"
import "./styles/searchPage.css"
import AnimeMain from "./components/AnimeMain";
import Header from "./components/Header";
import {Route, Routes, useRoutes} from "react-router-dom";
import AnimePage from "./components/AnimePage/AnimePage";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path={"/"} element={<Header/>}>
                  <Route index element={<AnimeMain/>}/>
                  <Route path={"/anime/:id"} element={<AnimePage/>}/>
                  <Route path={"/search"} element={<SearchPage/>}/>
                  <Route path={"*"} element={<h1>Ошибка</h1>}/>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
