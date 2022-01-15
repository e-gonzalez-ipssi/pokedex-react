import React from 'react';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import Menu from './composant/Menu';
import Home from "./page/Home"
import NotFound from "./page/NotFound"
import Pokedex from "./page/Pokedex"
import PokedexTypeFiltered from "./page/PokedexTypeFiltered"
import PokedexFavoriteFilter from "./page/PokedexFavoriteFilter"
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
            <Route path="/" element={<Home/>}/>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="/pokedex/favorite" element={<PokedexFavoriteFilter/>}/>
            <Route path="/pokedex/:type" element={<PokedexTypeFiltered/>}/>
            <Route path="/pokemon/:name" element={<Pokemon/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
      <Menu/>
    </ApolloProvider>
    </div>
  );
}

export default App;
