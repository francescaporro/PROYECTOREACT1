import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

class CarteleraCard extends Component {
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
        let storage = localStorage.getItem('favoritos')
    
        if(storage === null){
          let idEnArray = [id]
          let arrayAString = JSON.stringify(idEnArray)
          localStorage.setItem('favoritos', arrayAString)
    
        } else {
          let deStringAArray = JSON.parse(storage) 
          deStringAArray.push(id)
          let arrayAString = JSON.stringify(deStringAArray)
          localStorage.setItem('favoritos', arrayAString)
        }
    
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


            <div className='watch-display'>
                <img src={this.props.fotoPeli} alt="" />
                <Link to={`/detalle/id/${this.props.id}`}>
                    <h2> {this.props.tituloPeli} </h2>
                </Link>
                
                { this.state.esFavorito ?
                    <button onClick={()=> this.sacarFav(this.props.id)}> Sacar de favoritos </button>
                    :
                    <button className='fav' onClick={()=> this.addFav(this.props.id)}>Favoritos</button>
                }
                <p className={this.state.clase}> {this.props.detallePeli} </p>
                <a onClick={() => this.cambiarTexto()}> {this.state.texto} </a>
            </div>



        )
    }
}

export default CarteleraCard