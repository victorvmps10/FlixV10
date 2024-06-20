import React from "react";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";
import Error from "./pages/Error";
import Favorits from "./pages/Favorits";

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filmes/:id" element={<Filme/>}/>
            <Route path="/favoritos" element={<Favorits/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    )
}