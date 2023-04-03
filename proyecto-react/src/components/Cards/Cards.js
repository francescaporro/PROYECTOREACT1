import React, {Component} from 'react'
import Card from '../Card/Card'


class Cards extends Component{
    //1 que se ejecuta
    constructor(props){
        super(props)
        this.state={
            numero:1,
            peliculas:[]
        }
    }
    //3 que se ejecuta
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=5879ede367a1cc1dbb7ecaf35f419c29')
        .then(res => res.json())
        .then(data => this.setState({
            peliculas: data.results
        }))
        .catch(err => console.log(err))
    }

    //5 que se ejecuta tras ocurrir actualización
    componentDidUpdate(){
        console.log('Me actualice y pase por el didUpdate')

    }

    //Este es el ultimo que se ejecuta
    componentWillUnmount(){

    }

    actualizarEstado(){
        this.setState({
            numero: this.state.numero + 1
        })
    }

    //2 que se ejecuta
    //4 que se ejecuta si ocurre actualización
    render(){
        console.log(this.state.peliculas)
        return(
            <section className='cardContainer'>

                {

                    this.state.peliculas.length <= 0 ?
                        <h2> Trayendo peliculas… </h2> :

                        this.state.peliculas.map((unaPeli, idx) =>
                            <Card
                                fotoPeli={`https://image.tmdb.org/t/p/w500${unaPeli.poster_path}`}
                                tituloPeli={unaPeli.original_title}
                                detallePeli={unaPeli.overview}
                                

                                key={unaPeli.original_title + idx}
                            />)
                }

            </section>
        )
    }
}

export default Cards