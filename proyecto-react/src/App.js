import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Header from "./components/Header/Header";
import Home from './screens/Home/Home'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route path='/' exact={true} component={Home}/>
    </Switch>
   
    <Footer/>
    </>
  );
}

export default App;
