import React, {Component} from 'react';
import './styles.css';
import {Link} from 'react-router-dom'

class Card extends Component{
    constructor(props){
        super(props)
        this.state={
            texto:'Ver más',
            clase:'hidden'
        }
    }
    cambiarTexto(){
        if (this.state.texto === 'Ver más') {
            this.setState ({
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
    render()
    {return (
        
        <Link to={`/detalle/id/${this.props.id}`}>
         <section  className='watch-display'>
       
        <img src={this.props.fotoPeli} alt="" />
            <h2> {this.props.tituloPeli} </h2>
            <p className={this.state.clase}> {this.props.detallePeli} </p>
            <a onClick={()=> this.cambiarTexto()}> {this.state.texto} </a>
            <p className='fav'>Favoritos</p>
      
         </section>
         </Link>
         
         
     
    )
  }
}

  export default Card