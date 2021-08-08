import React from 'react';
import {Menu} from '../../componentes/Menu';

export const Cadastrar = () => {

    const [produto, setProduto] = useState({
        nome: '',
        valor: '',
        Quantidade: ''
    })

    return(
        <>
        <Menu />
            <h1>Cadastrar</h1>
            <form>
            <label>Nome: </label>
                <input type="text" name="nome" placeholder="Nome do produto" /><br /><br />

                <label>Valor: </label>
                <input type="text" name="Valor" placeholder="Preço do produto" /><br /><br />

                <label>Quantidade: </label>
                <input type="number" name="Quantidade" placeholder="Quantidade do produto" /><br /><br />

                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
};