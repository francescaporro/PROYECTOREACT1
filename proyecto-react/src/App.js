import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Header from "./components/Header/Header";
import Home from './screens/Home/Home'
import Footer from './components/Footer/Footer'
import Cartelera from './components/Cartelera/Cartelera';
import Cards from './components/Cards/Cards';
import NotFound from './screens/NotFound/NotFound';
import TodasCartel from './screens/todasCartel/todasCartel';
import todasPopus from './screens/todasPopus/todasPopus';
import Detalle from './screens/Detalle/Detalle';
import DetalleTv from './screens/DetalleTv/DetalleTv';
import Buscador from './components/Buscador/Buscador';
import TodasTv from './screens/todasTv/todasTv';
import Favoritos from './screens/Favoritos/Favoritos'

function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route path='/' exact={true} component={Home}/>
    <Route path='/todasPopus'  component={todasPopus}/>
    <Route path='/todasCartel'  component={TodasCartel}/>
    <Route path='/todasTv'  component={TodasTv}/>
    <Route path='/Detalle/id/:id' component={Detalle}/>
    <Route path='/detalleTv/id/:id' component={DetalleTv}/>
    <Route path="/resultados/:title" component={Buscador} />
    <Route path='/Favoritos'  component={Favoritos}/>
    <Route component={NotFound}/>
    </Switch>
   
    <Footer/>
    </>
  );
}

export default App;
