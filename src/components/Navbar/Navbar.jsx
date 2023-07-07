import React from 'react'
import './Navbar.scss'
import { NavLink, useLocation, useParams } from 'react-router-dom'
const Navbar = () => {
    let { slug } = useParams();
    let location = useLocation();

  return (
    <div className={slug ? 'mainNav bg-green' : (location.pathname === '/donaciones' ? 'mainNav bg-green' : 'mainNav')}>
        <nav className='mainNav__nav'>
            <ul>
                <NavLink to={'/nosotros'}>Nosotros</NavLink>
                <NavLink to={'/que-hacemos'}>¿Qué hacemos?</NavLink>
                <NavLink to={'https://corpoayapelartesanias.com/'}>Artesanias</NavLink>
                <NavLink to={'/'}>
                    <figure>
                        <img src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688432976/logo-blanco_x4th99.svg" alt="" />
                    </figure>
                </NavLink>
                <NavLink to={'/donaciones'}>Donaciones</NavLink>
                <NavLink to={'/como-ayudar'}>¿Cómo puedo ayudar?</NavLink>
                <NavLink to={'/ayapel'}>Ayapel</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar