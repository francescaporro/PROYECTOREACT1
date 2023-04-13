import React, {Component} from 'react';
import './styles.css';
import {Link} from 'react-router-dom'

class TvCard extends Component{
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
        
        <Link to={`/detalleTv/id/${this.props.id}`}>
         <section  className='watch-display'>
       
        <img src={this.props.fotoSerie} alt="" />
            <h2> {this.props.tituloSerie} </h2>
            <p className={this.state.clase}> {this.props.detalleSerie} </p>
            <a onClick={()=> this.cambiarTexto()}> {this.state.texto} </a>
            <p className='fav'>Favoritos</p>
      
         </section>
         </Link>
         
         
     
    )
  }
}

  export default TvCard