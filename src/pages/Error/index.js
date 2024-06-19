import React from "react";
import './error.css';
import { Link } from "react-router-dom";

export default function Error(){
    return(
<div className="not-found">
    <h1>404</h1>
    <h2>Pagina nao encontrada</h2>
    <Link to="/">Veja filmes em cartazes!!!</Link>
</div>
    );
}