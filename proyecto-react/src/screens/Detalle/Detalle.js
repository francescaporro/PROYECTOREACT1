import React, { Component } from 'react'

export default class Detalle extends Component {
    constructor(props){
        super(props)
        this.state= {
            id: this.props.match.params.id,
            detalle: ''
        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=eb09954096929ff16616027732037e32&language=en-US`)
        .then(res => res.json())
        .then(data => this.setState({ detalle: data }))
        .catch(error => console.error(error))
    }
    
    render() {
        return (
            <div>
                <h1>Detalle</h1>
                {
                this.state.detalle === '' ?
                <h1>Cargando detalle</h1>
                :
                <h2>{this.state.detalle.title}</h2>
            }
            </div>
        )
    }
}
