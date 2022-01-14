import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home"
import NotFound from "./page/NotFound"
import Pokedex from "./page/Pokedex"
import Pokemon from "./page/Pokemon"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" exact component={Home}/>
            <Route path="/pokemon" exact component={Pokedex}/>
            <Route path="/pokemon/{:name}" exact component={Pokemon}/>
            <Route component={NotFound}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
