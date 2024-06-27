import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Welcome from './pages/paciente/Welcome'
import PacienteId from './pages/Historial/PacienteId'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/historia/:pacienteId' element={<PacienteId/>}/>
     </Routes>
    </>
  )
}

export default App
