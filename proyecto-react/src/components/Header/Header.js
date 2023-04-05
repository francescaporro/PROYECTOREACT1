import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'


    function Header (){

        return(

            <header className='navbar'>
                <Link to = '/'><img className='logo' src='/logofiz.png' alt=''/></Link>
                    <ul>
                        <li> <Link to = "/">Home</Link></li>
                        <li> <Link to = "/Favoritos">Favoritos</Link></li>
                        <li> <Link to = "/todasCartel">Peliculas en cartel</Link></li>
                        <li> <Link to = "/todasPopus">Peliculas Populares</Link></li>
                    </ul>
            </header>
        )



    }

export default Header;