import React from 'react'
import './Error404.scss'
import { Link } from 'react-router-dom';
const Error404 = () => {
  const url = window.location.pathname;

  return (
    <div className='Error'>
      <div className="Error__parraf">
        <div className="Error__Url">
          <div className="Error__face">:(</div>
          <p className="Error__small">Lo sentimos, la pagina</p>
          <p className='p__container'>La ruta <div className="url">{url}</div> <p> No Existe</p> </p>
        </div>
        <Link className='Error__a' to='/'>Volver al inicio</Link>
      </div>
    </div>
  )
}

export default Error404