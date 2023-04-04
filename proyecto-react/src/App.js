import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Header from "./components/Header/Header";
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Cards/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
