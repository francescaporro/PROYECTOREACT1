import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

class TvCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            texto: 'Ver más',
            clase: 'hidden'
        }
    }
    cambiarTexto() {
        if (this.state.texto === 'Ver más') {
            this.setState({
                texto: 'Ver menos',
                clase: 'show'
            })

        } else {
            this.setState({
                texto: 'Ver más',
                clase: 'hidden'
            })
        }
    }
    render() {
        return (


            <section className='watch-display'>
                <img src={this.props.fotoSerie} alt="" />
                <Link to={`/detalleTv/id/${this.props.id}`}>
                    <h2> {this.props.tituloSerie} </h2>
                </Link>

                <p className={this.state.clase}> {this.props.detalleSerie} </p>
                <a onClick={() => this.cambiarTexto()}> {this.state.texto} </a>
                <p className='fav'>Favoritos</p>

            </section>




        )
    }
}

export default TvCard