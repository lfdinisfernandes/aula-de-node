import React, { useEffect, useState } from 'react';
import {Menu} from '../../componentes/Menu';

export const Editar = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [quantidade, setQantidade] = useState("");

    const editarProduto = async e => {
        e.preventDefault();
        console.log("Quantidade: " + quantidade);
    }

    useEffect(() => {

        const getProduto = async () => {
            setNome("mouse");
            setValor(52.47);
            setQantidade(43);
            
        }

        getProduto();
    }, [id]);

    return(
        <>
            <Menu />
            <h1>Editar</h1>

            <form onSubmit={editarProduto}>
                <label>Nome: </label>
                <input type="text" name="nome" placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value) }/><br /><br />

                <label>valor: </label>
                <input type="text" name="valor" placeholder="Preço do produto" value={valor}  onChange={e => setValor(e.target.value) }/><br /><br />

                <label>Quantidade: </label>
                <input type="number" name="Quantidade" placeholder="Quantidade do produto" value={quantidade} onChange={e => setQantidade(e.target.value) }/><br /><br />

                <button type="submit">Salvar</button>
            </form>
        </>
    )
};