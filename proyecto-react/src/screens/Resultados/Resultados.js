import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buscador from '../../componentes/Buscador/Buscador.js'

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: '',
      resultados: [],
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    // Realizar la búsqueda con el término de búsqueda ingresado
    const resultados = this.props.datos.filter(
      (dato) => dato.valorInput.toLowerCase().includes(this.state.valorInput.toLowerCase()) //esto esta mal pero no se bien que hacer 
    );
    // Actualizar el estado con los resultados de la búsqueda
    this.setState({ resultados: resultados });
  }

  guardarValor(event) {
    this.setState({
      valorInput: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <input onChange={(event) => this.guardarValor(event)} value={this.state.valorInput} />
        {
          this.state.valorInput ?
            <input type='submit' value='Buscar' />
            :
            <input type='submit' value='Buscar' disabled />
        }
        {
          this.state.resultados.length > 0 &&
          <ul>
            {this.state.resultados.map((resultado) => (
              <li key={resultado.id}>
                <Link to={`/resultado/${resultado.id}`}>
                  {resultado.nombre}
                </Link>
              </li>
            ))}
          </ul>
        }
      </form>
    );
  }
}

export default Resultados;
