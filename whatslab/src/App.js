import React from 'react';
import styled from 'styled-components';
import IconMenssagem from './telegram2.svg'

const ListaDeMensagem = styled.div`
display: flex;
flex-grow: 1;
flex-direction: column;
justify-content: flex-end;

overflow: auto;
width: 100%;
border: solid 1px red;
`
const ContainerPagina = styled.div`
background-image: url("https://adoption.azureedge.net/wp-content/custom-backgrounds-gallery/user-submitted-background-46.jpg");
opacity: 0.8;
background-repeat: no-repeat;
background-size: 100vw 100vh;
background-color: #a3d7e6;
height: 100vh;
display: flex;
justify-content: center;
box-sizing: border-box;
`

const PainelDeMensagem = styled.div`
display: grid;
flex-direction: row;
border: solid 1px black;
align-items: center;
justify-content: center;
grid-template-columns:1fr 3fr 1fr;
padding: 0px 10px;
column-gap: 8px;


input{
    height: 30px;
    border-radius: 12px;
}

button{
    border-radius: 20px;
    width: 100%
}
`

const ContainerMensagem = styled.div`
background-image: linear-gradient(white, lightblue);
display: grid;
grid-template-rows: 8fr 1fr;
width: 30%;
height: 99%;
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

const ContainerNome = styled.div`
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
    font-weight:bold;
`


class App extends React.Component {
    state = {
        listaDeMensagens: [],
        valorInputMensagem: "",
        valorInputUsuario: ""
    }

    adicionarMensagem = () => {
        const novaMensagem = {
            id: Date.now(),
            nome: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        }

        const novaListaEstado = [...this.state.listaDeMensagens, novaMensagem]
        this.setState({ listaDeMensagens: novaListaEstado, valorInputMensagem:"", valorInputUsuario:"" })
    }

    deletaMensagem = (id) => {
        const novaLista = this.state.listaDeMensagens.filter((array,indice) => {
            return array.id!== id
        })
        this.setState({listaDeMensagens: novaLista})
        }

    onChangeUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value })
    }

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value })
    }
    onKeyPressEnter = (event) => {
        if(event.which === 13) {
            this.adicionarMensagem();
            }
    }


    render() {

        const listaDeComponents = this.state.listaDeMensagens.map((casas,indice) => {

            const identificarDelete = () => {
                this.deletaMensagem(casas.id)
            }

            if (casas.nome.toLowerCase() === "eu") {

                return (
                    <BalaoDeMensagem tipo={"eu"} key={casas.id} onDoubleClick={identificarDelete}>
                        {casas.mensagem}
                    </BalaoDeMensagem>
                )
            } else {

                return (
                    <BalaoDeMensagem tipo={"outro"} key={casas.id} onDoubleClick={identificarDelete}>
                        <ContainerNome>{casas.nome}</ContainerNome>
                        <div>{casas.mensagem}</div>
                    </BalaoDeMensagem>
                )
            }
        })



        return (
            <ContainerPagina>
                <ContainerMensagem>
                    <ListaDeMensagem> {listaDeComponents}</ListaDeMensagem>
                    <PainelDeMensagem>
                        <input placeholder={"Usuário"} id="usuario" value={this.state.valorInputUsuario} onChange={this.onChangeUsuario} type="text" />
                        <input placeholder={"Mensagem"} id="mensagem " value={this.state.valorInputMensagem} onKeyPress={this.onKeyPressEnter}  onChange={this.onChangeInputMensagem} type="text" />
                        <button onClick={this.adicionarMensagem}><img src={IconMenssagem} alt="icone de enviar mensagem" /></button>
                    </PainelDeMensagem>
                </ContainerMensagem>
            </ContainerPagina>
        )
    }
}

export default App