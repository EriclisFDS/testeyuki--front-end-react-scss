import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Books from '../pages/books';
import Genres from '../pages/genres';

export default function Routes(){
    return (
        <Switch>
            <Route element={<Genres/>} path="/"/>
            <Route element={<Books/>} path="/:genreId/books" />
        </Switch>
    )
}