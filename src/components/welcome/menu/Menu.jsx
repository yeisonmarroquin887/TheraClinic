import React from 'react'
import './Menu.css'

const Menu = ({option, cerrar}) => {

	const closhet = () => {
		cerrar(false)
	}

  return (
	<section className='Menu'>
		<div className='Menu__exit'>
			<i onClick={closhet} className='bx bxs-chevrons-right'></i>
		</div>
		<header className='Menu__header'>
			<div>
			<figure>
				👨🏽‍⚕️
			</figure>
			<div>
			<h1>Dinael</h1>
			<h3>Admin</h3>						
			</div>
		
			</div>
			<i className='bx bxs-down-arrow'></i>
		</header>
		<div className='Menu__buttons'>
			<button ><span>🧍🏽‍♂️Pacientes </span><i onClick={() => option(0)}className='bx bxs-down-arrow'></i></button>
			<button ><span><i className='bx bxs-layer'></i> Citas</span> <i  onClick={() => option(2)}className='bx bxs-down-arrow'></i></button>
		</div>
	</section>
  )
}

export default Menu