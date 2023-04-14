import React, { Component } from 'react'

export default class DetalleTV extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            detalle: {},
            genres: ''
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=eb09954096929ff16616027732037e32&language=en-US`)
            .then(res => res.json())
            .then(data => this.setState({ detalle: data ,
                genres: data.genres[0].name}))
            .catch(error => console.error(error))
    }

    render() {
        console.log(this.state.detalle)
        return (
            
            <div>
                <h1>Detalle</h1>
                {
                    this.state.detalle === '' ?
                        <h1>Cargando detalle</h1>
                        :
                        <section>
                            <h2>{this.state.detalle.name}</h2>
                            <img src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} />
                            <h3> Rating: {this.state.detalle.vote_average}</h3>
                            <h3> Fecha de estreno: {this.state.detalle.first_air_date}</h3>
                            <h4>Sinopsis: {this.state.detalle.overview}</h4>
                            <h4>Generos: {this.state.genres}</h4>
                            
                            <button>Agregar a favoritos</button>

                        </section>
                }
            </div> //FALTA GENEROS, PERO COMO ES UN ARRAY TENGO DUDAS 
        )
    }
}
