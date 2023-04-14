import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

class TvCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            texto: 'Ver más',
            clase: 'hidden',
            esFavorito: false
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
         let storageAArray = JSON.parse(storage)
      
       if(storageAArray !== null){
        let estaEnElArray = storageAArray.includes(this.props.id)
         if(estaEnElArray){
             this.setState({
               esFavorito: true
             })
            }
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

    addFav(id){
        let storage = localStorage.getItem('favoritos');
        let deStringAArray = [];
        if (storage !== null) {
           
          deStringAArray = JSON.parse(storage)
        }
        console.log(deStringAArray)
        deStringAArray.push(id)
        let arrayAString = JSON.stringify(deStringAArray)
        localStorage.setItem('favoritos', arrayAString)
        this.setState({
          esFavorito: true
        })
      }

      sacarFav(id){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)
       let filtro =  storageAArray.filter((elm)=>elm !== id)
       let filtroAString = JSON.stringify(filtro)
       localStorage.setItem('favoritos', filtroAString)

       this.setState({
           esFavorito: false
       })
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
                 { this.state.esFavorito ?
                    <button onClick={()=> this.sacarFav(this.props.id)}> Sacar de favoritos </button>
                    :
                    <button className='fav' onClick={()=> this.addFav(this.props.id)}>Favoritos</button>
                }

            </section>




        )
    }
}

export default TvCard