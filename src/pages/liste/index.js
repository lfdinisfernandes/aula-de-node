import React, { useEffect, useState } from "react";
import {Menu} from '../../componentes/Menu';
export const Listar = () => {

    const [data, setData] = useState([]);

    const listarProdutos = async => {
        var valores = [
            {
                "id": 3,
                "nome": "Monitor",
                "valor": 820.61,
                "quantidade": 15
            },
            {
                "id": 2,
                "nome": "Teclado",
                "valor": 120.47,
                "quantidade": 25
            },
            {
                "id": 1,
                "nome": "Mouse",
                "valor": 52.47,
                "quantidade": 43
            }
        ]
        setData(valores);
    }

    useEffect(() =>{
        listarProdutos();
    },[]);
    return(
        <>
            <Menu />
            <h1>Listar</h1>

            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Valor</td>
                        <td>Quantidade</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(produto =>(
                        <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.valor}</td>
                        <td>{produto.quantidade}</td>
                        <td>Visualizar Editar Apagar</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}