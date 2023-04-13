import React, { Component } from 'react'
import TvCards from '../../components/TvCards/TvCards'
import Buscador from '../../components/Buscador/Buscador'


class TodasTv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1, // definir el estado de la página actual
            series: [], // definir un estado para almacenar las películas
            backup:[]
        }
        this.traerMas = this.traerMas.bind(this) // enlazar el this para la función traerMas
    }

    actualizadorDeEstado(data){
        this.setState({
            series: data
        })
    }

    componentDidMount() {
        // traer las primeras películas al cargar el componente
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=eb09954096929ff16616027732037e32&language=en-US&page=${this.state.page}`)
            .then(res => res.json())
            .then(data => this.setState({
                series: data.results, 
                backup: data.results
            }))
            .catch(error => console.error(error))
    }

    traerMas() {
        // traer la siguiente página de películas
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=eb09954096929ff16616027732037e32&language=en-US&page=${this.state.page + 1}`)
            .then(res => res.json())
            .then(data => this.setState({
                series: this.state.series.concat(data.results), // concatenar las películas antiguas con las nuevas
                page: this.state.page + 1 // actualizar el número de página
            }, ()=> console.log(this.state.series)))
            .catch(error => console.error(error))
    }

    render() {
        console.log('Vuelve a renderizar')
        return (
            <>
            <div>
            <Buscador 
            actualizador={(data) => this.actualizadorDeEstado(data)}
            fuente= {this.state.backup}/>
            </div>
            <div className="">
                <h1>SERIES POPULARES</h1>
                <TvCards series={this.state.series}/>
                <button onClick={()=> this.traerMas()}>Traer más</button>
            </div>
            </>
        )
    }
}

export default TodasTv





