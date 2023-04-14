import React, { Component } from 'react'
import Card from '../../components/Card/Card'
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
                    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=5879ede367a1cc1dbb7ecaf35f419c29&language=en-US&page/${id}')
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
            </div>
        )
    }
}

export default Favoritos
