import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAutentication = () => {
	const Api = "https://localhost:8080/api/v1/software"
	const navigate = useNavigate()

	const Autentication = (data, setErrorDatos, reset) => {
	/*	axios.post(Api, data)
		.then(res => {
			console.log(pasate)
		})
		.catch(err => {
			setErrorDatos(false)
			reset()
		})*/

		if(data.Contraseña == 123){
			navigate("welcome")
			reset()
		}else {
			setErrorDatos(false)
			reset()
		}
	}

	return {Autentication}
}

export default useAutentication;