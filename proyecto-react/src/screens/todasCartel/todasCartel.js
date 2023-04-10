import React, { Component } from 'react'
import Cartelera from '../../components/Cartelera/Cartelera'


class TodasCartel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1, // definir el estado de la página actual
            peliculas: [] // definir un estado para almacenar las películas
        }
        this.traerMas = this.traerMas.bind(this) // enlazar el this para la función traerMas
    }

    componentDidMount() {
        // traer las primeras películas al cargar el componente
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eb09954096929ff16616027732037e32&language=en-US&page=${this.state.page}`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: data.results
            }))
            .catch(error => console.error(error))
    }

    traerMas() {
        // traer la siguiente página de películas
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eb09954096929ff16616027732037e32&language=en-US&page=${this.state.page + 1}`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: this.state.peliculas.concat(data.results), // concatenar las películas antiguas con las nuevas
                page: this.state.page + 1 // actualizar el número de página
            }, ()=> console.log(this.state.peliculas)))
            .catch(error => console.error(error))
    }

    render() {
        console.log('Vuelve a renderizar')
        return (
            <div className="">
                <h1>CARTELERA</h1>
                <Cartelera peliculas={this.state.peliculas} />
                <button onClick={()=> this.traerMas()}>Traer más</button>
            </div>
        )
    }
}

export default TodasCartel





