import React from 'react';
import styled from 'styled-components';

const ListaDeMensagem = styled.div`
display: flex;
flex-grow: 1;
flex-direction: column;
justify-content: flex-end;
padding: 25px;
overflow: scroll;
border: solid 3px yellow;
width: 90%;
height: 100%;

`
const ContainerPagina = styled.div`
background-color: blueviolet;
height: 100vh;
display: flex;
justify-content: center;
box-sizing: border-box;
`

const PainelDeMensagem = styled.div`
display: flex;
flex-direction: row;
border: solid 3px gold;
`

const ContainerMensagem = styled.div`
background-color: blue;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
border: solid 3px green;
width: 30%;
height: 100%;
`
const BalaoDeMensagem = styled.div`
    background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8"
        } else if (props.tipo === "outro") {
            return "#ffffff"
        }
    }};
    align-self:  ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
    }};
	margin-right: ${props => {
        if (props.tipo === "eu") {
            return "1.5em"
        }
    }};

    margin-left: ${props => {
        if (props.tipo !== "eu") {
            return "1.5em"
        }
    }};

    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em;
    word-wrap: break-word;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

    `


class App extends React.Component {
    state = {
        listaDeMensagens: [{
            nome: "Welcome to WhatsLab",
            mensagem: "",
        }],
        valorInputMensagem: "",
        valorInputUsuario: ""
    }

    adicionarMensagem = () => {
        const novaMensagem = {
            nome: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        }

        const novaListaEstado = [...this.state.listaDeMensagens, novaMensagem]
        this.setState({ listaDeMensagens: novaListaEstado })
    }

    onChangeUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value })
    }

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value })
    }

    render() {
        const listaDeComponents = this.state.listaDeMensagens.map((casas) => {
            if (casas.nome.toLowerCase() === "eu") {

                return (
                    <BalaoDeMensagem tipo={"eu"}>
                        {casas.mensagem}
                    </BalaoDeMensagem>
                )
            } else {

                return (
                    <BalaoDeMensagem tipo={"outro"}>
                        <div>{casas.nome}</div>
                        <div>{casas.mensagem}</div>
                    </BalaoDeMensagem>
                )
            }


            /*             return (
                            <div>
                                <strong>{casas.nome}</strong>
                                <p>{casas.mensagem}</p>
                            </div>
                        ) */

        })



        return (
            <ContainerPagina>
                <ContainerMensagem>
                    <ListaDeMensagem> {listaDeComponents}</ListaDeMensagem>
                    <PainelDeMensagem>
                        <input placeholder={"Usuário"} value={this.state.valorInputUsuario} onChange={this.onChangeUsuario} type="text" />
                        <input placeholder={"Mensagem"} value={this.state.valorInputMensagem} onChange={this.onChangeInputMensagem} type="text" />
                        <button onClick={this.adicionarMensagem}>Enviar</button>
                    </PainelDeMensagem>
                </ContainerMensagem>
            </ContainerPagina>
        )
    }
}

export default App