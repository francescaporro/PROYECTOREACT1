import React, { Component } from 'react'

export default class DetalleTV extends Component {
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
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=eb09954096929ff16616027732037e32&language=en-US`)
            .then(res => res.json())
            .then(data => this.setState({ detalle: data ,
                genres: data.genres[0].name}))
            .catch(error => console.error(error))
            
            let storageSerie = localStorage.getItem('favoritoserie')
            let storageAArray = JSON.parse(storageSerie)
         
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
        let storageSerie = localStorage.getItem('favoritoserie')
        let storageAArray = JSON.parse(storageSerie)
       let filtro =  storageAArray.filter((elm)=>elm !== id)
       let filtroAString = JSON.stringify(filtro)
       localStorage.setItem('favoritoserie', filtroAString)

       this.setState({
           esFavorito: false
       })
    }

    render() {
        console.log(this.state.detalle)
        return (
            
            <div>
                <h1>Detalle</h1>
                {
                    this.state.detalle === '' ?
                        <h1>Cargando detalle</h1>
                        :
                        <section>
                            <h2>{this.state.detalle.name}</h2>
                            <img src={`https://image.tmdb.org/t/p/w342/${this.state.detalle.poster_path}`} />
                            <h3> Rating: {this.state.detalle.vote_average}</h3>
                            <h3> Fecha de estreno: {this.state.detalle.first_air_date}</h3>
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
