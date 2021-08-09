import styled from "styled-components";

export const Container = styled.section`
    margin: 0px auto;
    width: 960px;
    max-width: 960px;
`;

export const ConteudoTitulo = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const Titulo = styled.h1`
    font-size: 23px;
    font-family: sans-serif;
    color: #1d1e1e;
`;

export const BotaoAcao = styled.section`
    margin: 5px;
`;

export const ButtonSucess = styled.button`
    background-color: #fff;
    color: #198754;
    padding: 5px 8px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    font=size: 16px;
    :hover{
        background-color: #198754;
        color: #fff;
    }
`;

export const Table = styled.table`
    margin-top: 15px;
    width: 100%;
    th{
       background-color: #007281; 
       color: #f1f1f1;
       padding: 10px;
    }
    td{
        background-color: #f6f6f6; 
       color: #3e3e3e;
       padding: 8px;
    }
`;

export const ButtonPrimary = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 5px 8px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    cursor: pointer;
    font=size: 16px;
    :hover{
        background-color: #0d6efd;
        color: #fff;
    }
`;

export const ButtonWarning = styled.button`
    background-color: #fff;
    color: #ffc107;
    padding: 5px 8px;
    border: 1px solid #ffc107;
    border-radius: 4px;
    cursor: pointer;
    font=size: 16px;
    :hover{
        background-color: #ffc107;
        color: #fff;
    }
`;
export const ButtonDanger = styled.button`
    background-color: #fff;
    color: #dc3545;
    padding: 5px 8px;
    border: 1px solid #dc3545;
    border-radius: 4px;
    cursor: pointer;
    font=size: 16px;
    :hover{
        background-color: #dc3545;
        color: #fff;
    }
`;