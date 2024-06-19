import React from "react";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filmes/:id" element={<Filme/>}/>
        </Routes>
        </BrowserRouter>
    )
}