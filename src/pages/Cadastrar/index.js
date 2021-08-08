import React, { useState } from "react";
import {Menu} from '../../componentes/Menu';

export const Cadastrar = () => {

    const [produto, setProduto] = useState({
        nome: '',
        valor: '',
        Quantidade: ''
    })

    const valueInput = e => setProduto({...produto, [e.target.name]: e.target.value});

    const addProduto = async e =>{
        e.preventDefault();
        console.log("Nome: " + produto.nome);
    }

    return(
        <>
        <Menu />
            <h1>Cadastrar</h1>
            <form ondsubmit={addProduto}>
                <label>Nome: </label>
                <input type="text" name="nome" placeholder="Nome do produto" onchange={valueInput} /><br /><br />

                <label>Valor: </label>
                <input type="text" name="Valor" placeholder="Preço do produto"onchange={valueInput} /><br /><br />

                <label>Quantidade: </label>
                <input type="number" name="Quantidade" placeholder="Quantidade do produto"onchange={valueInput} /><br /><br />

                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
};