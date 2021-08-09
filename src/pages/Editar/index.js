import React, { useEffect, useState } from 'react';
import {Menu} from '../../componentes/Menu';
import {Link} from 'react-router-dom';
import {Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonInfo, Form, Label, Input, Hr, ButtonPrimary, ButtonWarning} from '../../styles/custom_adm';


export const Editar = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [quantidade, setQantidade] = useState("");

    const editarProduto = async e => {
        e.preventDefault();
        //console.log("Quantidade: " + quantidade);
        alert("Nome: " + nome);
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
        <Container>
            <Menu />
            <ConteudoTitulo>
                <Titulo>Editar</Titulo>
                <BotaoAcao> 
                    <Link to="/listar">
                    <ButtonInfo type="button">Listar</ButtonInfo>
                    </Link>{" "}
                    <Link to={"/visualizar/" + id}>
                    <ButtonPrimary type="button">visualizar</ButtonPrimary>
                    </Link>
                </BotaoAcao> 
            </ConteudoTitulo>
            
            <Hr />

            <Form onSubmit={editarProduto}>
                <Label>Nome: </Label>
                <Input type="text" name="nome" placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value) }/>

                <Label>valor: </Label>
                <Input type="text" name="valor" placeholder="Preço do produto" value={valor}  onChange={e => setValor(e.target.value) }/>

                <Label>Quantidade: </Label>
                <Input type="number" name="Quantidade" placeholder="Quantidade do produto" value={quantidade} onChange={e => setQantidade(e.target.value) }/>

                <ButtonWarning type="submit">Salvar</ButtonWarning>
            </Form>
        </Container>
    )
};