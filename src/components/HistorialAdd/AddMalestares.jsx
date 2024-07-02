import React from 'react'
import { useForm } from 'react-hook-form'
import useAplication from '../../Hooks/useAplication';
const Api = import.meta.env.VITE_REACT_APP_URL;

const AddMalestares = ({pacienteId, onNew}) => {
	const {register, handleSubmit, reset} = useForm();
	const {AddCrud}  = useAplication()
	const createMalestar = (data) => {
		const api = `${Api}/malestares`
		const message = "Malestar asociado"
		data.pacienteId = pacienteId;
       AddCrud(api, data, message, reset, onNew)
    }
  return (
	<form action="" onSubmit={handleSubmit(createMalestar)}>
	<div>
		<label htmlFor="">Nombre del Malestar:</label>
		<input {...register("NombreMalestar")} type="text" required />
	</div>
	<div>
		<label htmlFor="">Desde cuando lo tiene:</label>
		<input {...register("Desde")} type="date" required/>
	</div>
	<div>
		<label htmlFor="">Zona donde le duele:</label>
		<input {...register("Zona")} type="text" required/>
	</div>
	<button>Agregar</button>
</form>
  )
}

export default AddMalestares