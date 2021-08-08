import React, { useEffect, useState } from 'react';
import {Menu} from '../../componentes/Menu';

export const Visualizar = (props) => {

   const [id] = useState(props.match.params.id);
   console.log(id)
   const [data, setData] = useState("");
   

   useEffect(() => {
        const getProduto = async () =>{
            setData({
                id: 1,
                nome: "mouse",
                valor: 52.47,
                quantidade: 43 
            })
        }

        getProduto();
    },[id])
    
    return(
        <>
            <Menu />
            <h1>Visualizar</h1>
            <span>ID: {data.id}</span><br />
            <span>Nomme: {data.nome}</span><br />
            <span>Valor: {data.valor}</span><br />
            <span>Qantidade: {data.quantidade}</span><br />
        </>
    )
};