import React from "react";
import './header.css';
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link className="logo"to="/">V10 Flix</Link>
            <Link className="favoritos"to="/">Meus filmes</Link>
            
        </header>
    )
}