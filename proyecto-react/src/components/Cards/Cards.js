import React, { Component } from 'react';
import './styles.css';
import Card from '../Card/Card'


class Cards extends Component {
    //1 que se ejecuta
    constructor(props) {
        super(props)
        this.state = {
            numero: 1,
        }
    }


    actualizarEstado() {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    //2 que se ejecuta
    //4 que se ejecuta si ocurre actualización
    render() {
        console.log(this.state.peliculas)
        return (
           
            <>
   
            <section className='cardContainer'>
                {this.props.peliculas.length <= 0 ?
                    <h2>Cargando...</h2>
                    :
                    <div>
                        {this.props.peliculas.map((unaPeli, idx) => (
                            <Card
                                fotoPeli={`https://image.tmdb.org/t/p/w500${unaPeli.poster_path}`}
                                tituloPeli={unaPeli.original_title}
                                detallePeli={unaPeli.overview}
                                onClick={this.actualizarEstado}
                                key={unaPeli.original_title + idx}
                                id={unaPeli.id}
                            />
                        ))}
                        
                    </div>
                }
            </section>

            </>
        )
    }
}

export default Cards