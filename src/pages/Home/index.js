import React, { useState, useEffect } from "react";
import api from "../../services/api";
import './index.css';
import { Link } from "react-router-dom";

export default function Home(){
    const [filmes, settFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function loadFilmes(){
            if(loading){
                const response = await api.get("movie/now_playing?",{
                    params:{
                        api_key: "2694cd19470ad7b42d274cb9d06490b4",
                        language: "pt-BR",
                        page: 1,
                    }
                })
                settFilmes(response.data.results.slice(0, 10));
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            } 
           
            
        }
        loadFilmes();
      
    }, [])
   if(loading){
    return(
        <div className="loading">
            <h2> Carregando filmes </h2>
        </div>
    )
   }else{
    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img 
                            src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                            alt="filme.title"/>
                            <Link to={`/filmes/${filme.id}`}>Acessar</Link> 
                        </article>
                    )
                })}
            </div>
            
        </div>
            );
   }  
}