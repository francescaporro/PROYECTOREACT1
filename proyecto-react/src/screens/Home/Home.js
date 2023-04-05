import React, {Component} from 'react'
import Cards from '../../components/Cards/Cards'
class Home extends Component{
    constructor (props) {
    super (props)
    }
    render () {
    return (
        <div>
             <h1>PELICULAS MÁS POPULARES</h1>
            <div className="App">
      <Cards/>
    </div>
        </div>
    )
    }
    }
    export default Home