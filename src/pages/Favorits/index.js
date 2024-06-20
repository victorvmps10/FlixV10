import React, {useEffect, useState} from "react";
import './favorits.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Favorits(){
    const [filmes, setFilmes] = useState([]);
    useEffect(()=>{
        const minhaLista = localStorage.getItem("@Flixv10");
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

    function excluir(id){
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@Flixv10", JSON.stringify(filtroFilmes))
        toast.success(`Removido com sucesso`);
    }
    return(
        <div className="meus-filmes">
            <h1> FAVORITOS: </h1>
            {filmes.length === 0 && <span>Nenhum salvo {`:(`}</span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <main>
                            <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                            <button onClick={()=> excluir(item.id)}>Excluir</button>
                            </main>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}