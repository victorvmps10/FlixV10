import React, { useState, useEffect } from "react";
import api from "../../services/api";
import './Filme.css';

import { useParams, useNavigate } from "react-router-dom";

export default function Filme(){
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [filmes, setFilmes] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        async function loadFilmes(){
                await api.get(`/movie/${id}`,{
                    params:{
                        api_key: "2694cd19470ad7b42d274cb9d06490b4",
                        language: "pt-BR",
                        page: 1,
                    }
                })
                .then((response)=>{
                    setFilmes(response.data);  
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                })
                .catch(()=>{
                    setTimeout(() => {
                        console.log('filme nao encontrado');
                    navigate("/", { replace: true});
                    return;
                    }, 2000);
                })
        }
        loadFilmes();
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@Flixv10");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo)=> filmesSalvo.id === filmes.id)

        if(hasFilme){
            alert(`ESSE FILME JA TEM`);
            return;
        }
            filmesSalvos.push(filmes);
            localStorage.setItem("@Flixv10", JSON.stringify(filmesSalvos));
            alert(`Salvo sucess`);

    }
    if(loading){
        return(
            <div className="loading">
                <h2> Carregando info do filme </h2>
                <h3> Caso nao encontre voltara a Home </h3>
            </div>
        )
       }else{
        return(
            <div className="filme-info">
            <h1>{filmes.title}</h1>
            <img 
            src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`}
            alt={filmes.title} />
      
            <h3>Sinopse</h3>
            <span>{filmes.overview}</span>
      
            <strong>Avalição: {filmes.vote_average} / 10</strong>
            
            <main className="areaBtn">
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a 
                href={`https://www.youtube.com/results?search_query=${filmes.title} Trailer`}
                target="_blank"
                rel="external"
                >
                    Trailer
                </a>
            </button>
            </main>
          </div>
                );
       }  
 
}