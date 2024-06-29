import React, { useEffect } from 'react';
import './Paciente.css';
import { useNavigate } from 'react-router-dom';
import useAplication from '../../../Hooks/useAplication';

const Paciente = ({option}) => {

  const {GetPacientes, Pacientes} = useAplication()
  useEffect(() => {
    GetPacientes()
  }, [])
  console.log(Pacientes)

  const users = Pacientes

  const navigate = useNavigate();
  const Historial = (id) => {
    navigate(`/historia/${id}`)
  }


  return (
    <div className='Pacientes'>
    <h1>Pacientes</h1>
    <section className='Paciente'>
      <header className="table-header">
        <div className="search-bar">
          <label htmlFor="buscar">Buscar</label>
          <input type="number" id="buscar" placeholder="Buscar por cédula..." />
        </div>
        <button onClick={() => option(1)} className="add-button">
          <i className='bx bx-plus'></i>
          <span>Nuevo</span>
        </button>
      </header>
      <table className="patient-table">
        <thead>
          <tr>
            <th className="column-id">Id</th>
            <th>Nombre</th>
            <th className="column-cedula">Cédula</th>
            <th className="column-telefono">Teléfono</th>
            <th className="column-estado">Estado</th>
            <th className="column-fecha">Fecha</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user.id}>
              <td className="column-id">{user.id}</td>
              <td>{user.Nombres}</td>
              <td className="column-cedula">{user.Cedula}</td>
              <td className="column-telefono">{user.Telefono}</td>
              <td className="column-estado">{user.Estado}</td>
              <td className="column-fecha">{user.FechaIngreso}</td>
              <td className='Accion'>
                <button onClick={() => Historial(user?.id)} className="action-button"><i className='bx bxs-edit-alt'></i></button>
                <button className="action-button-delete"><i className='bx bx-trash'></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  </div>
  );
};

export default Paciente;
