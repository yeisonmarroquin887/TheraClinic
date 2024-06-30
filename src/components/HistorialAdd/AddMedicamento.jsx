import React from 'react'
import { useForm } from 'react-hook-form'

const AddMedicamento = () => {
	const {register, handleSubmit,reset, onNewEnfermedad} = useForm()

	const createMedicamento = (data) => {
        console.log(data)
    }
	return (
		<form action="" onSubmit={handleSubmit(createMedicamento)}>
			<div>
				<label htmlFor="">Nombre del medicamento resetado:</label>
				<input {...register("NombreMedicamento")} type="text" required />
			</div>
			<div>
				<label htmlFor="">Descripcion:</label>
				<input {...register("Descripcion")} type="text" required />
			</div>
			<button>Agregar</button>
		</form>
	)
}

export default AddMedicamento