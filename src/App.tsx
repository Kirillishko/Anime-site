import React from 'react';
import "./styles/html.css"
import AnimeMain from "./components/AnimeMain";
import Header from "./components/Header";

function App() {
  return (
      <div className="App">
          <Header/>
          <div className={"plug"}></div>
          <AnimeMain/>
      </div>
  );
}

export default App;
