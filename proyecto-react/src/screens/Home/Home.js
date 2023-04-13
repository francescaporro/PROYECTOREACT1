import React, { Component } from 'react'
import Cards from '../../components/Cards/Cards'
import Cartelera from '../../components/Cartelera/Cartelera'
import TvCards from '../../components/TvCards/TvCards'
import Buscador from '../../components/Buscador/Buscador'
import { Link } from 'react-router-dom'
import "./styles.css"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            peliculas:[], 
            series:[],
            backup:[]
        }
    }
    
    actualizadorDeEstado(data){
        this.setState({
            peliculas: data,
            series: data
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
        
        //FETCH PARA TV POPULARES
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=5879ede367a1cc1dbb7ecaf35f419c29`)
            .then(res => res.json())
            .then(data => this.setState({
                series: data.results,
                backup: data.results
            }))
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state.series)
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
                <div className="App">
                    <h1>SERIES MÁS POPULARES</h1>
                    <button> <Link to='/todasTv'> Ver todas </Link></button>
                    <TvCards series={this.state.series}/>
                </div>
            </>
        )
    }
}
export default Home