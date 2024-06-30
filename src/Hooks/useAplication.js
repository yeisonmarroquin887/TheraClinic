import axios from "axios";
import { useState } from "react"
const Api = import.meta.env.VITE_REACT_APP_URL;

const useAplication = () => {

	const [Pacientes, setPacientes] = useState(null)

	const GetPacientes = () => {
			axios.get(`${Api}/pacientes`)
			.then((res) => {setPacientes(res.data)})
			.catch(err => console.log(err))
	}

	const CreatePaciente = (data, reset) => {
		console.log(data)
		axios.post(`${Api}/pacientes`, data)
		.then((res) => {
			alert("Usuario Creado")
			reset()
		})
		.catch(err => {
			alert("Lo siento pero el Usuario no se pudo crear")
			console.log(err)
			reset()
		})
	}

	const AddCrud = (url, data, message, reset, onNewEnfermedad) => {
		axios.post(url, data)
		.then(res => {
			alert(`${message}`)
			reset()
			if (onNewEnfermedad) {
				onNewEnfermedad(res.data.Usuario);
			}
		})
		.catch(err => {
			alert("Error al hacer el registros")
		})
	}

	return {GetPacientes, Pacientes, CreatePaciente, AddCrud}
}

export default useAplication