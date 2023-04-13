import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: '',
        }
    }

    
    evitarSubmit(event){
        event.preventDefault()
    }
    metodoQueFiltra(texto, arrayFuente){
        let filtrado = arrayFuente.filter((elm)=>elm.original_title.toLowerCase().includes(texto.toLowerCase()))
        return filtrado
    }

    guardarValor(event){
        this.setState(
            {valorInput: event.target.value}, () => {
                let filtro= this.metodoQueFiltra(this.state.valorInput, this.props.fuente)
                this.props.actualizador(filtro)
            }
        )
    }
    
    
    render() {
        console.log(this.props)
        return (
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <input onChange={(event) => this.guardarValor(event)} value={this.state.valorInput} />
                     <input type='submit' value='submit' />
                
            </form>
        )
    }
}

export default Buscador;