import React, { Component } from 'react'

export default class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            detalle: {},
            genres: '',
            esFavorito: false

        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=eb09954096929ff16616027732037e32&language=en-US`)
            .then(res => res.json())
            .then(data => this.setState({ 
                detalle: data,
                genres: data.genres[0].name,
             }))
            .catch(error => console.error(error))
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
        console.log(this.state.detalle)
        return (
            
            <div className='detalle'>
                <h1>Detalle</h1>
                {
                    this.state.detalle === '' ?
                        <h1>Cargando detalle</h1>
                        :
                        <section>
                            <h2>{this.state.detalle.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} />
                            <h3>Rating: {this.state.detalle.vote_average}</h3>
                            <h3>Fecha de estreno: {this.state.detalle.release_date}</h3>
                            <h3>Duración: {this.state.detalle.runtime}</h3>
                            <h4>Sinopsis: {this.state.detalle.overview}</h4>
                            <h4>Generos: {this.state.genres}</h4>
                            
                            { this.state.esFavorito ?
                    <button onClick={()=> this.sacarFav(this.props.id)}> Sacar de favoritos </button>
                    :
                    <button className='fav' onClick={()=> this.addFav(this.props.id)}>Favoritos</button>
                }

                        </section>
                }
            </div> 
        )
    }
}
