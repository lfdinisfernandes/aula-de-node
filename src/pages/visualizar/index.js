import React, { useEffect, useState } from 'react';
import {Menu} from '../../componentes/Menu';
import {Link} from 'react-router-dom';
import {Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonWarning, ButtonInfo, ConteudoView} from '../../styles/custom_adm'

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
    },[id]);
    
    return(
        <Container>
            <Menu />
            <ConteudoTitulo>
                <Titulo>Visualizar</Titulo>
                <BotaoAcao> 
                    <Link to="/listar">
                        <ButtonInfo type="button">Listar</ButtonInfo>
                    </Link>{" "}
                    <Link to={"/editar/" + data.id}>
                        <ButtonWarning type="button">Editar</ButtonWarning>
                    </Link> 
                </BotaoAcao> 
            </ConteudoTitulo>

            <hr />
            
            <ConteudoView>ID: {data.id}</ConteudoView>
            <ConteudoView>Nomme: {data.nome}</ConteudoView>
            <ConteudoView>Valor: {data.valor}</ConteudoView>
            <ConteudoView>Qantidade: {data.quantidade}</ConteudoView>
        </Container>
    )
};