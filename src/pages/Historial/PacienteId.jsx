import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './PacienteId.css'; // Importar archivo CSS para estilos
import Header from '../../components/welcome/header/Header';

const PacienteId = () => {
    const { pacienteId } = useParams();

    // Datos de prueba de pacientes (solo un subconjunto)
    const users = [
        {
            id: 1,
            Nombre: 'Andres',
            Telefono: '3227222010',
            Estado: 'Activo',
            Fecha: '2024-06-27',
            Sexo: 'Masculino',
            Cedula: 1108998785,
            Alergias: "pedro",
            ConsumoAlcohol: "mucho",
            ProblemasEquilibrio: "No",
            DolorCabeza: "No",
            Enfermedades: "No",
            Malestares: "Dolor de espalda, Partidura de brazo, Hernia discal",
            Medicamento: "diclofenaco"
        },
        {
            id: 2,
            Nombre: 'Alan',
            Telefono: '3227222010',
            Estado: 'Activo',
            Fecha: '2024-06-27',
            Sexo: 'Masculino',
            Cedula: 1108998785,
            Alergias: "pedro",
            ConsumoAlcohol: "mucho",
            ProblemasEquilibrio: "No",
            DolorCabeza: "No",
            Enfermedades: "No",
            Malestares: "Dolor de espalda, Partidura de brazo, Hernia discal",
            Medicamento: "diclofenaco"
        },
        {
            id: 3,
            Nombre: 'Aliss',
            Telefono: '3227222010',
            Estado: 'Activo',
            Sexo: 'Femenino',
            Fecha: '2024-06-27',
            Cedula: 1108998785,
            Alergias: "pedro",
            ConsumoAlcohol: "mucho",
            ProblemasEquilibrio: "No",
            DolorCabeza: "No",
            Enfermedades: "No",
            Malestares: "Dolor de espalda, Partidura de brazo, Hernia discal",
            Medicamento: "diclofenaco"
        }
    ];

    const paciente = users.find(user => user.id === parseInt(pacienteId));

    const { register, handleSubmit, setValue } = useForm();

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (paciente) {
            // Establecer los valores iniciales del formulario al cargar el componente
            Object.keys(paciente).forEach(key => {
                setValue(key, paciente[key]);
            });
        }
    }, [paciente, setValue]);

    const onSubmit = (data) => {
        console.log(data); // Aquí puedes manejar la lógica para guardar los cambios (ej. enviar a una API)
        // Puedes agregar aquí la lógica para guardar los cambios
        // Por ejemplo, enviar los datos a una API o actualizar un estado en tu aplicación
    };

    const handleEditClick = () => {
        setEditMode(true); // Habilitar el modo de edición
    };

	const navigate = useNavigate()
	const volver = () => {
		navigate("/welcome")
	}

    return (
		<div className='PacienteId'>
			<div className='PacienteId__Header'>
				<Header/>
			</div>
			<button onClick={volver} className='Volver'>Volver</button>
			<div className="PacienteId_Info">
            <h1>Historia Clínica de {paciente.Nombre}</h1>
			<br />
            <form onSubmit={handleSubmit(onSubmit)} className="PacienteId__form">
                <div className="PacienteId__form-group">
                    <label htmlFor="Nombre">Nombre:</label>
                    <input id="Nombre" type="text" {...register('Nombre')} defaultValue={paciente.Nombre} readOnly={!editMode} />
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="Telefono">Teléfono:</label>
                    <input id="Telefono" type="text" {...register('Telefono')} defaultValue={paciente.Telefono} readOnly={!editMode} />
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="Estado">Estado:</label>
                    <select id="Estado" {...register('Estado')} defaultValue={paciente.Estado} readOnly={!editMode}>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
                <div  className="PacienteId__form-group">
                    <label htmlFor="">Sexo</label>
                <select {...register("Sexo")} defaultValue={paciente.Sexo} readOnly={!editMode} required>
              <option value="">Selecciona el sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="Fecha">Fecha:</label>
                    <input id="Fecha" type="text" {...register('Fecha')} defaultValue={paciente.Fecha} readOnly />
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="Cedula">Cédula:</label>
                    <input id="Cedula" type="text" {...register('Cedula')} defaultValue={paciente.Cedula} readOnly={!editMode} />
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="Alergias">Alergias:</label>
                    <input id="Alergias" type="text" {...register('Alergias')} defaultValue={paciente.Alergias} readOnly={!editMode} />
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="ConsumoAlcohol">Consumo de Alcohol:</label>
                    <input id="ConsumoAlcohol" type="text" {...register('ConsumoAlcohol')} defaultValue={paciente.ConsumoAlcohol} readOnly={!editMode} />
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="ProblemasEquilibrio">Problemas de Equilibrio:</label>
                    <input id="ProblemasEquilibrio" type="text" {...register('ProblemasEquilibrio')} defaultValue={paciente.ProblemasEquilibrio} readOnly={!editMode} />
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="DolorCabeza">Dolor de Cabeza:</label>
                    <input id="DolorCabeza" type="text" {...register('DolorCabeza')} defaultValue={paciente.DolorCabeza} readOnly={!editMode} />
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="Enfermedades">Enfermedades:</label>
                    <input id="Enfermedades" type="text" {...register('Enfermedades')} defaultValue={paciente.Enfermedades} readOnly={!editMode} />
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="Malestares">Malestares:</label>
                    <textarea id="Malestares" {...register('Malestares')} defaultValue={paciente.Malestares} readOnly={!editMode} />
                </div>
                <div className="PacienteId__form-group">
                    <label htmlFor="Medicamento">Medicamento:</label>
                    <input id="Medicamento" type="text" {...register('Medicamento')} defaultValue={paciente.Medicamento} readOnly={!editMode} />
                </div>
                <div className="PacienteId__buttons">
                    {!editMode && (
                        <button type="button" className="btn-edit" onClick={handleEditClick}>Editar</button>
                    )}
                    {editMode && (
                        <button type="submit" className="btn-save">Guardar cambios</button>
                    )}
                </div>
            </form>
        </div>
		</div>
       
    );
};

export default PacienteId;
