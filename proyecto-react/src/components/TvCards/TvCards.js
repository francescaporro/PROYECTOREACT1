import React, { Component } from 'react';
import './styles.css';
import TvCard from '../TvCard/TvCard'


class TvCards extends Component {
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
        console.log(this.props.series)
        return (
           
            <>
   
            <section>
                {this.props.series.length <= 0 ?
                    <h2>Cargando...</h2>
                    :
                    <div className='cardContainer'>
                        {this.props.series.map((unaSerie, idx) => (
                            <TvCard
                                fotoSerie={`https://image.tmdb.org/t/p/w500${unaSerie.poster_path}`}
                                tituloSerie={unaSerie.name}
                                detalleSerie={unaSerie.overview}
                                onClick={this.actualizarEstado}
                                key={unaSerie.original_name + idx}
                                id={unaSerie.id}
                            />
                        ))}
                        
                    </div>
                }
            </section>

            </>
        )
    }
}

export default TvCards