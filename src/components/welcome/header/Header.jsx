import React from 'react'
import './Header.css'

const Header = ({cerrar}) => {
  return (
	<div className='Header'>
      <div>
        <figure>
          <img src="../../../../images/logo.png" alt="Logo" />
        </figure>
        <h1>TheraClinic</h1>
      </div>
          <button className='Cerrar-Sesion' onClick={cerrar}>Cerrar sesión</button>
	</div>
  )
}

export default Header