import React, { useState } from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/welcome/header/Header'
import Menu from '../../components/welcome/menu/Menu'
import Paciente from '../../components/welcome/pacientes/Paciente'
import AddPaciente from '../../components/welcome/addpacientes/AddPaciente'
import Citas from '../../components/welcome/citas/Citas'

const Welcome = () => {
  const navigate = useNavigate()
  const cerrar = () => {
    localStorage.removeItem("authToken")
    navigate("/")
  }
  const [Num, setNum] = useState(null)

  const option = (n) => {
    switch (n) {
      case 0:
        setNum(0)
        break;
      case 1:
        setNum(1)
        break;
        case 2:
          setNum(2)
          break
    
      default:
        break;
    }
  }
  const [MenuA, setMenuA] = useState(false)

  const AbrirMenu = () => {
    setMenuA(true)
  }


  return (
	<div className='Welcome'>
    <header className='Welcome__header'>
      <Header cerrar={cerrar}/>
    </header>

    <section className='Welcome__Info'>
    <div className='menu'>
      <i onClick={AbrirMenu} className='bx bx-menu-alt-left' ></i>
      </div>
      <article className={MenuA ? "Welcome__Menu" : "Menu__clochet"}>
        <Menu cerrar={setMenuA} option={option}/>
      </article>
      <article className='Welcome__Information'>
        {
          Num === 0 ?(
            <Paciente option={option}/>
          ):
          Num === 1 ? (
            <AddPaciente/>
          ) : Num === 2 ?(
            <Citas/>
          ):(
            <Paciente option={option}/>
          )
        }
      </article>
    </section>

  </div>
  )
}

export default Welcome