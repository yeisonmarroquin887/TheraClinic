import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './PacienteId.css'; // Importar archivo CSS para estilos
import Header from '../../components/welcome/header/Header';
import axios from 'axios';
import AddEnfermedad from '../../components/HistorialAdd/AddEnfermedad';
import AddAlergia from '../../components/HistorialAdd/AddAlergia';
import AddMalestares from '../../components/HistorialAdd/AddMalestares';
import AddMedicamento from '../../components/HistorialAdd/AddMedicamento';
const Api = import.meta.env.VITE_REACT_APP_URL;

const PacienteId = () => {
    const { pacienteId } = useParams();
    const [PacienteOne, setPacienteOne] = useState(null)
    const [AddEn, setAddEn] = useState(false)
    const [AddAle, setAddAle] = useState(false)
    const [AddMale, setAddMale] = useState(false)
    const [AddMedi, setAddMedi] = useState(false)

    const abrirE = () => {
        setAddEn(true)
    }
    const cerrarE = () => {
        setAddEn(false)
    }

    const abrirAle = () => {
        setAddAle(true)
    }
    const cerrarAle = () => {
        setAddAle(false)
    }

    const abrirMale = () => {
        setAddMale(true)
    }
    const cerrarMale = () => {
        setAddMale(false)
    }

    const abrirMedi = () => {
        setAddMedi(true)
    }
    const cerrarMedi = () => {
        setAddMedi(false)
    }


    useEffect(() => {
        axios.get(`${Api}/pacientes/${pacienteId}`)
        .then(res => setPacienteOne(res.data))
        .catch(err => console.log(err))
    }, [pacienteId]) 


    const paciente = PacienteOne

    const { register, handleSubmit, setValue } = useForm();

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (paciente) {
            Object.keys(paciente).forEach(key => {
                setValue(key, paciente[key]);
            });
        }
    }, [paciente, setValue]);

    const onSubmit = (data) => {
        console.log(data); 
        axios.put(`${Api}/pacientes/${pacienteId}`, data)
        .then((res) => {
            alert("Paciente actualizado")
            setEditMode(false); 
        })
        .catch(err => {
            alert("Error al actualizar el paciente")
            console.log(err)
        })
    };

    const handleEditClick = () => {
        setEditMode(true); 
    };

    const navigate = useNavigate()
    const volver = () => {
        navigate("/welcome")
    }


    const addNewEnfermedad = (newEnfermedad) => {
        setPacienteOne((prevPaciente) => ({
            ...prevPaciente,
            enfermedads: [...prevPaciente.enfermedads, newEnfermedad]
        }));
    };

    const addNewAlergias = (newAlergias) => {
        setPacienteOne((prevPaciente) => ({
            ...prevPaciente,
            enfermedads: [...prevPaciente.alergias, newAlergias]
        }));
    };

    const addNewmalestars = (newMalestars) => {
        setPacienteOne((prevPaciente) => ({
            ...prevPaciente,
            enfermedads: [...prevPaciente.alergias, newMalestars]
        }));
    };



    return (
        <div className='PacienteId'>
            <div className='PacienteId__Header'>
                <Header/>
            </div>
            <button onClick={volver} className='Volver'>Volver</button>
            <div className="PacienteId__Info">
                <div className='PacienteId__form '>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <h1 className='PacienteId__Title'>Historia Clínica de {paciente?.Nombres}</h1>
                        <div className='PacienteId__form-info'>
                            <div className="PacienteId__form-group">
                                <label htmlFor="Nombre">Nombres:</label>
                                <input id="Nombre" type="text" {...register('Nombres')} defaultValue={paciente?.Nombres} readOnly={!editMode} />
                            </div>
                            <div className="PacienteId__form-group">
                                <label htmlFor="Nombre">Apellidos:</label>
                                <input id="Nombre" type="text" {...register('Apellidos')} defaultValue={paciente?.Apellidos} readOnly={!editMode} />
                            </div>
                            <div className="PacienteId__form-group">
                                <label htmlFor="Telefono">Teléfono:</label>
                                <input id="Telefono" type="text" {...register('Telefono')} defaultValue={paciente?.Telefono} readOnly={!editMode} />
                            </div>
                            <div className="PacienteId__form-group">
                                <label htmlFor="Estado">Estado:</label>
                                <select id="Estado" {...register('Estado')} defaultValue={paciente?.Estado} disabled={!editMode}>
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>
                            </div>
                            <div className="PacienteId__form-group">
                                <label htmlFor="">Sexo</label>
                                <select {...register("Sexo")} defaultValue={paciente?.Sexo} disabled={!editMode} required>
                                    <option value="">Selecciona el sexo</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                            </div>
                            <div className="PacienteId__form-group">
                                <label htmlFor="Fecha">Fecha:</label>
                                <input id="Fecha" type="date" {...register('FechaIngreso')} defaultValue={paciente?.FechaIngreso} readOnly />
                            </div>
                            <div className="PacienteId__form-group">
                                <label htmlFor="Cedula">Cédula:</label>
                                <input id="Cedula" type="text" {...register('Identificacion')} defaultValue={paciente?.Identificacion} readOnly={!editMode} />
                            </div>
                            <div className="PacienteId__form-group">
                                <label htmlFor="">Consumo de alcohol:</label>
                                <select {...register("Alcoholismo")} defaultValue={paciente?.Alcoholismo} disabled={!editMode} required>
                                    <option value="">Selecciona una opción</option>
                                    <option value="Si">Si</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="PacienteId__form-group">
                                <label htmlFor="">Problemas de equilibrio:</label>
                                <select {...register("ProblemasEquilibrio")} defaultValue={paciente?.ProblemasEquilibrio} disabled={!editMode} required>
                                    <option value="">Selecciona una opción</option>
                                    <option value="Si">Si</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="PacienteId__form-group">
                                <label htmlFor="">Dolor de cabeza:</label>
                                <select {...register("DolorCabeza")} defaultValue={paciente?.DolorCabeza} disabled={!editMode} required>
                                    <option value="">Selecciona una opción</option>
                                    <option value="Si">Si</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="PacienteId__buttons">
                            {!editMode && (
                                <button type="button" className="btn-edit" onClick={handleEditClick}>Editar</button>
                            )}
                            {editMode && (
                                <button type="submit" className="btn-save" onClick={handleSubmit(onSubmit)}>Guardar cambios</button>
                            )}
                        </div>
                    </form>
                    <div>
                        <hr />
                        <div className='PacienteId__Info-2'>
                            <h2>Informacion medica:</h2>
                            <div>
                                <div className='Add'>
                                <button onClick={abrirE}>Agregar Enfermedad</button>
                                <button onClick={abrirAle}>Agregar alergias</button>
                                <button onClick={abrirMale}>Agregar malestares</button>
                                <button onClick={abrirMedi}>Agregar Medicamentos</button>
                                </div>
                                
                                <div>
                                 <div className='PacienteId__addEnfermedad'>
                                <section className={AddEn ? "Form-add" : "Form-closhe"}>
                                    <div>
                                    <div>
                                  <h1>Ingresa los datos</h1>
                                  <i onClick={cerrarE} className='bx bx-x'></i>
                                  </div>
                                  <AddEnfermedad pacienteId={pacienteId} onNewEnfermedad={addNewEnfermedad}/>
                                    </div>
                                </section>
                                </div>
                                </div>

                                <div className='PacienteId__addAlergia'>
                                <section className={AddAle ? "Form-add-Alergia" : "Form-closhe-Alergia"}>
                                    <div>
                                    <div>
                                  <h1>Ingresa los datos</h1>
                
                                  <i onClick={cerrarAle} className='bx bx-x'></i>
                                  </div>
                                  <AddAlergia pacienteId={pacienteId} onNewA={addNewAlergias}/>
                                    </div>
                                </section>
                                </div>


                                <div className='PacienteId__addMalestar'>
                                <div>
                                </div>
                                <section className={AddMale ? "Form-add-Malestar" : "Form-closhe-Malestar"}>
                                    <div>
                                    <div>
                                  <h1>Ingresa los datos</h1>
                
                                  <i onClick={cerrarMale} className='bx bx-x'></i>
                                  </div>
                                  <AddMalestares pacienteId={pacienteId} onNewEnfermedad={addNewmalestars}/>          
                                    </div>
                                </section>
                                </div>

                                <div className='PacienteId__addMedicamento'>
                                <div>
                                </div>
                                <section className={AddMedi ? "Form-add-Medicamento" : "Form-closhe-Medicamento"}>
                                    <div>
                                    <div>
                                  <h1>Ingresa los datos</h1>
                
                                  <i onClick={cerrarMedi} className='bx bx-x'></i>
                                  </div>
                                  <AddMedicamento pacienteId={pacienteId} onNewEnfermedad={addNewEnfermedad}/>
                                    </div>
                                </section>
                                </div>

                            </div>






                            <div>
                                    <b>Enfermedades: <hr /></b>
                                <ul>
                                    {
                                        paciente?.enfermedads?.map((enfermedad, index) => (
                                            <li key={index}>🩸 {enfermedad.NombreEnfermedad} </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                             <b>Alergias: <hr /></b>
                                <ul>
                                    {
                                        paciente?.alergias?.map((alergia, index) => (
                                            <li key={index}>😷 {alergia.NombreAlergia} </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='PacienteId__Malestares'>
                            <b>Malestares: <hr /></b>
                                <div>
                                    {
                                        paciente?.malestars?.map((malestar, index) => (
                                            <ul key={index}>
                                                <h2>🤕</h2>
                                                <h4> {malestar.NombreMalestar} </h4>
                                                <li><span>Zona:</span> {malestar.Zona} </li>
                                                <li><span>Desde:</span> {malestar.Desde} </li>
                                                <div>
                                                    <button>Editar</button>
                                                    <button>Eliminar</button>
                                                </div>
                                            </ul>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='PacienteId__Medicamentos'>
                                <b>Medicamentos resetados: <hr /></b>
                                <div>
                                    {
                                        paciente?.medicamentos?.map((medicamento, index) => (
                                            <ul key={index}>
                                                <h2>💊</h2>
                                                <h4> {medicamento.NombreMedicamento} </h4>
                                                <li><span>Descripción:</span> {medicamento.Descripcion} </li>
                                                <div>
                                                    <button>Editar</button>
                                                    <button>Eliminar</button>
                                                </div>
                                            </ul>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='Paciente__citas'>
                                <label htmlFor="">Consultas: <hr /></label>
                                <div>
                                    {
                                        paciente?.cita?.map((citas, index) => (
                                            <ul key={index}>
                                                <h2>🏥</h2>
                                                <h4> {citas.Titulo} </h4>
                                                <li><span>Fecha:</span> {citas.Fecha} </li>
                                                <li><span>Hora:</span> {citas.Hora} </li>
                                                <div>
                                                    <button>Editar</button>
                                                    <button>Eliminar</button>
                                                </div>
                                            </ul>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PacienteId;
