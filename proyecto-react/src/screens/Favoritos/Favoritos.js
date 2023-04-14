import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import CarteleraCard from '../../components/CarteleraCard/CarteleraCard'
import TvCard from '../../components/TvCard/TvCard'
export class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state ={
            favoritos: []
        }
    }

componentDidMount(){
    let storage = localStorage.getItem('favoritos')
    if(storage !== null) {
        let storageAArray = JSON.parse(storage)
        Promise.all(
            storageAArray.map(id => {
                return (
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eb09954096929ff16616027732037e32&language=en-US`)
                    .then(resp => resp.json())
                    .then(data => data)
                )
            })
        )
        .then(data => this.setState({
            favoritos: data
        }))
        .catch(err=> console.log(err))
    }
    
}
    render() {
        return (
            <div>
                <Card peliculas={this.state.favoritos}/>
                <CarteleraCard peliculas={this.state.favoritos}/>
                <TvCard series={this.state.favoritos}/>

            </div>
        )
    }
}

export default Favoritos
