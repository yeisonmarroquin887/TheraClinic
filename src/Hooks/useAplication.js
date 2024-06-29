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

	return {GetPacientes, Pacientes, CreatePaciente}
}

export default useAplication