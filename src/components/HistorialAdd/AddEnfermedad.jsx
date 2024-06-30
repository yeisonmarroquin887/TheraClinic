import React from 'react'
import { useForm } from 'react-hook-form'
import useAplication from '../../Hooks/useAplication'
const Api = import.meta.env.VITE_REACT_APP_URL;

const AddEnfermedad = ({pacienteId, onNewEnfermedad }) => {
	const { register, handleSubmit, reset } = useForm()
	const {AddCrud} = useAplication()
	const createEnfer = (data) => {
		const api = `${Api}/enfermedades`
		const message = "Enfermedad asociada"
		data.pacienteId = pacienteId;
		AddCrud(api,data, message, reset, onNewEnfermedad )
	}
	return (
		<form action="" onSubmit={handleSubmit(createEnfer)}>
			<div>
				<label htmlFor="">Nombre de la enfermedad</label>
				<input {...register("NombreEnfermedad")} type="text" required />
			</div>
			<button>Agregar</button>
		</form>

	)
}

export default AddEnfermedad