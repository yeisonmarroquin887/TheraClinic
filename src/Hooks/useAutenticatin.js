import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Api = import.meta.env.VITE_REACT_APP_URL;

const useAutentication = () => {
	const navigate = useNavigate()
	const Autentication = (datos, setErrorDatos, reset) => {
		axios.post(`${Api}/terapeutas/login`, datos)
		.then(res => {
			localStorage.setItem("authToken", res.data.token)
			if(localStorage.getItem("authToken")){
				navigate("/welcome")
			}else {
				navigate("/")
			}
		})
		.catch(err => {
			setErrorDatos(false)
			reset()
			console.log(err)
		})
	}

	return {Autentication}
}

export default useAutentication;