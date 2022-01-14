import React from 'react';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import Home from "./page/Home"
import NotFound from "./page/NotFound"
import Pokedex from "./page/Pokedex"
import Pokemon from "./page/Pokemon"

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={Home}/>
            <Route path="/pokedex" element={Pokedex}/>
            <Route path="/pokemon/:name" element={Pokemon}/>
            <Route element={NotFound}/>
          </Routes>
      </BrowserRouter>
    </ApolloProvider>
    </div>
  );
}

export default App;
