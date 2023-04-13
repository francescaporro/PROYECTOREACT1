import React, { Component } from 'react'
import Cards from '../../components/Cards/Cards'
import Cartelera from '../../components/Cartelera/Cartelera'
import Buscador from '../../components/Buscador/Buscador'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            peliculas:[], 
            backup:[]
        }
    }
    
    actualizadorDeEstado(data){
        this.setState({
            peliculas: data
        })
    }

    componentDidMount() {
        //FETCH PARA PELICULAS POPULARES
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=5879ede367a1cc1dbb7ecaf35f419c29&language=en-US&page=${this.state.page}`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: data.results,
                backup: data.results
            }))
            .catch(err => console.log(err))

        //FETCH PARA PELICULAS CARTELERA  
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=5879ede367a1cc1dbb7ecaf35f419c29')
                    .then(res => res.json())
                    .then(data => this.setState({
                        peliculas: data.results, 
                        backup: data.results
                    }))
                    .catch(err => console.log(err))
            
    }
    render() {
        return (
            <>
            <div>
            <Buscador 
            actualizador={(data) => this.actualizadorDeEstado(data)}
            fuente= {this.state.backup}/>

            </div>
                <div className="App">
                    <h1>PELICULAS MÁS POPULARES</h1>
                    <button> <Link to='/todasPopus'> Ver todas </Link></button>
                    <Cards peliculas={this.state.peliculas}/>
                </div>
                <div className="App">
                    <h1>CARTELERA</h1>
                    <button> <Link to='/todasCartel'> Ver todas </Link></button>
                    <Cartelera peliculas={this.state.peliculas}/>
                </div>
            </>
        )
    }
}
export default Home