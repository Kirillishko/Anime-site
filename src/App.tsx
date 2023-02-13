import React from 'react';
import AnimeContainer from "./components/AnimeContainer";
import "./styles/html.css"
import AnimeMain from "./components/AnimeMain";
import Header from "./components/Header";

function App() {
  return (
      <div className="App">
          <Header/>
          <AnimeMain/>
      </div>
  );
}

export default App;
