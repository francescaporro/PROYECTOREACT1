import React, { Component } from 'react';
import './styles.css';
import CarteleraCard from '../CarteleraCard/CarteleraCard'


class Cartelera extends Component {
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
               
            <section >
                {this.props.peliculas.length <= 0 ?
                    <h2>Caragando...</h2>
                    :
                    <div className='cardContainer'>
                        {this.props.peliculas.map((unaPeli, idx) => (
                            <CarteleraCard
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

export default Cartelera