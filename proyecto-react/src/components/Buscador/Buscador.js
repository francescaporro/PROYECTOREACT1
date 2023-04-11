import React, { Component } from 'react';

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
    guardarValor(event){
        this.setState(
            {valorInput: event.target.value}
        )
    }
    
    
    render() {
        return (
            <form onSubmit={(event)=>this.evitarSubmit(event)}>
                <input onChange={(event)=>this.guardarValor(event)} value={this.state.valorInput}/>
                <button>Enviar consulta</button>
            </form>
        )
    }
}

export default Buscador;