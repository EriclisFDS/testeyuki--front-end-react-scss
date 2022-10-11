import React from 'react';

import { Router, Routes, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Books from './pages/books';
import Genres from './pages/genres';

import "./styles/general.scss"

function App() {
    const history = createBrowserHistory();
    return (
        
            <Routes>
              <Route element={<Genres/>} path="/"/>
              <Route element={<Books/>} path="/:genreId/books" />
            </Routes>
        
        
    );
}

export default App;
