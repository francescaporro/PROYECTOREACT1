import React, {Component} from 'react'
import { Link } from 'react-router-dom'
class Card extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render()
    {return (
      
         <article className=''>
        <img src={this.props.fotoPeli} alt="" />
            <h2> {this.props.tituloPeli} </h2>
            <p> {this.props.detallePeli} </p>
            <p className='more'>Ver más</p> 
            <p className='fav'>Favoritos</p>
         </article>
     
    )
  }
}

  export default Card