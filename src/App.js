import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home"
import NotFound from "../page/NotFound"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" exact component={Home}/>
            <Route component={NotFound}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
