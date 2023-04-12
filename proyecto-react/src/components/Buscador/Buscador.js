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
    guardarValor(event){
        this.setState(
            {valorInput: event.target.value}
        )
    }
    
    
    render() {
        return (
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <input onChange={(event) => this.guardarValor(event)} value={this.state.valorInput} />
                {
                    this.state.valorInput ?
                        <Link to={`/resultados/${this.state.valorInput}`}>
                            <input type='submit' value='submit' />
                        </Link>
                        :
                        <input type='submit' value='submit' />
                }
            </form>
        )
    }
}

export default Buscador;