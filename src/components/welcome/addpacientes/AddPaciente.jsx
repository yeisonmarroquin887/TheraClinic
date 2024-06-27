import React, { useState } from 'react'
import './Addpaciente.css'
import { useForm } from 'react-hook-form'

const AddPaciente = () => {
  const { handleSubmit, register, reset } = useForm()
  const [alergias, setAlergias] = useState(false)
  const [alcohol, setAlcohol] = useState(false)
  const [equilibrio, setEquilibrio] = useState(false)
  const [dolorCabeza, setDolorCabeza] = useState(false)
  const [enfermedades, setEnfermedades] = useState(false)

  const submit = (data) => {
    console.log(data)
  }

  return (
    <div className='AddPaciente'>
      <h1>Nuevo Paciente</h1>
      <ul className='AddPaciente__menu'>
        <li>
          <input type="checkbox" onChange={(e) => setAlergias(e.target.checked)} />
          <label htmlFor="">Alergias</label>
        </li>
        <li>
          <input type="checkbox" onChange={(e) => setAlcohol(e.target.checked)} />
          <label htmlFor="">Consumo de alcohol</label>
        </li>
        <li>
          <input type="checkbox" onChange={(e) => setEquilibrio(e.target.checked)} />
          <label htmlFor="">Problemas de equilibrio</label>
        </li>
        <li>
          <input type="checkbox" onChange={(e) => setDolorCabeza(e.target.checked)} />
          <label htmlFor="">Dolor de cabeza</label>
        </li>
        <li>
          <input type="checkbox" onChange={(e) => setEnfermedades(e.target.checked)} />
          <label htmlFor="">Enfermedades</label>
        </li>
      </ul>
      <form onSubmit={handleSubmit(submit)} className='AddPaciente__form'>
        <div>
          <div>
            <label htmlFor="">Nombres</label>
            <input {...register("Nombres")} type="text" required />
          </div>
          <div>
            <label htmlFor="">Apellidos</label>
            <input {...register("Apellidos")} type="text" required />
          </div>
          <div>
            <label htmlFor="">Edad</label>
            <input {...register("Edad")} type="number" required />
          </div>
          <div>
            <label htmlFor="">Sexo</label>
            <select {...register("Sexo")} required>
              <option value="">Selecciona el sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Altura</label>
            <input {...register("Altura")} type="number" step="0.01" min="0" max="3" required />
          </div>
          <div>
            <label htmlFor="">Peso</label>
            <input {...register("Peso")} type="number" required />
          </div>
          <div>
            <label htmlFor="">Cedula</label>
            <input {...register("Cedula")} type="number" required />
          </div>
          <div>
            <label htmlFor="">Estado</label>
            <select {...register("Estado")} required>
              <option value="">Selecciona su estado</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Fecha de ingreso</label>
            <input {...register("FechaIngreso")} type="date" required />
          </div>
          {alergias && (
            <div>
              <label htmlFor="">Tipo de alergia</label>
              <input {...register("TipoAlergia")} type="text" />
            </div>
          )}
          {alcohol && (
            <div>
              <label htmlFor="">Consumo de alcohol</label>
              <input {...register("ConsumoAlcohol")} type="text" />
            </div>
          )}
          {equilibrio && (
            <div>
              <label htmlFor="">Problemas de equilibrio</label>
              <input {...register("ProblemasEquilibrio")} type="text" />
            </div>
          )}
          {dolorCabeza && (
            <div>
              <label htmlFor="">Dolor de cabeza</label>
              <input {...register("DolorCabeza")} type="text" />
            </div>
          )}
          {enfermedades && (
            <div>
              <label htmlFor="">Enfermedades</label>
              <input {...register("Enfermedades")} type="text" />
            </div>
          )}
        </div>
        <button className='AddPaciente__Register'>Registrar</button>
      </form>
    </div>
  )
}

export default AddPaciente
