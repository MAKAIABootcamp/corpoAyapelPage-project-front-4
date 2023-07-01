import React from 'react'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='mainNav'>
        <nav className='mainNav__nav'>
            <ul>
                <li>Nosotros</li>
                <li>Que hacemos</li>
                <li>Artesanias</li>
                <li>
                    <figure>
                        <img src="https://res.cloudinary.com/dgnwqr93n/image/upload/v1688153548/Untitled_design__1_-removebg-preview_1_kfahdd.png" alt="" />
                    </figure>
                </li>
                <li>Donaciones</li>
                <li>Documentos</li>
                <li>Ayapel</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar