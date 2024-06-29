import React, { useState } from 'react'
import './Addpaciente.css'
import { useForm } from 'react-hook-form'
import useAplication from '../../../Hooks/useAplication'

const AddPaciente = () => {
  const { handleSubmit, register, reset } = useForm()
  const [alergias, setAlergias] = useState(false)

  const {CreatePaciente} = useAplication()

  const submit = (data) => {
    data.Alcoholismo = data.Alcoholismo ? "Si" : "No"
    data.ProblemasEquilibrio = data.ProblemasEquilibrio ? "Si" : "No"
    data.DolorCabeza = data.DolorCabeza ? "Si" : "No"

    if (!alergias) {
      data.Alergias = "No"
    }
   CreatePaciente(data, reset)
  }

  return (
    <div className='AddPaciente'>
      <h1>Nuevo Paciente</h1>


      <form onSubmit={handleSubmit(submit)} className='AddPaciente__form'>
      <ul className='AddPaciente__menu'>
        <li>
          <input type="checkbox" onChange={(e) => setAlergias(e.target.checked)} />
          <label htmlFor="">Alergias</label>
        </li>
        <li>
          <input {...register("Alcoholismo")} type="checkbox" />
          <label htmlFor="">Consumo de alcohol</label>
        </li>
        <li>
          <input {...register("ProblemasEquilibrio")} type="checkbox"  />
          <label htmlFor="">Problemas de equilibrio</label>
        </li>
        <li>
          <input {...register("DolorCabeza")} type="checkbox" />
          <label htmlFor="">Dolor de cabeza</label>
        </li>
      </ul>
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
            <label htmlFor="">Telefono</label>
            <input {...register("Telefono")} type="number" required />
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
            <input {...register("Identificacion")} type="number" required />
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
              <input {...register("Alergias")} type="text" />
            </div>
          )}
        </div>
        <button className='AddPaciente__Register'>Registrar</button>
      </form>
    </div>
  )
}

export default AddPaciente
