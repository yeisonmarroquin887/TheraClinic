// src/components/Citas.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import './Citas.css';

const Citas = () => {
  const { register, handleSubmit, reset } = useForm();
  const [eventData, setEventData] = useState([
    { id: 1, title: 'Cita de ejemplo 1', start: '2024-07-01', name: 'Juan Pérez', phoneNumber: '1234567890' },
    { id: 2, title: 'Cita de ejemplo 2', start: '2024-07-03', name: 'María García', phoneNumber: '9876543210' },
    { id: 3, title: 'Cita de ejemplo 3', start: '2024-07-05', name: 'Pedro Martínez', phoneNumber: '5556667777' },
  ]);

  const onSubmit = (data) => {
    const newEvent = {
      id: eventData.length + 1,
      title: data.title,
      start: data.date,
      name: data.name,
      phoneNumber: data.phoneNumber,
    };
    setEventData([...eventData, newEvent]);
    reset();
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`¿Estás seguro de eliminar la cita "${clickInfo.event.title}"?`)) {
      setEventData(eventData.filter((event) => event.id !== clickInfo.event.id));
    }
  };

  const handleWhatsAppReminder = (event) => {
    const { title, name, phoneNumber } = event;
    const message = `Hola ${name}, te recordamos tu cita "${title}" para el día ${event.start}.`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=+57${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="Citas">
      <h1>Registros de Citas</h1>
      <div className="container">
        <div className="calendar-container">
          <h2>Calendario de Citas</h2>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={eventData}
            eventClick={handleEventClick}
          />
        </div>
        <div className="new-event-container">
          <h2>Nueva Cita</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="title">Título:</label>
              <input id="title" type="text" {...register('title', { required: true })} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input id="name" type="text" {...register('name', { required: true })} />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Número de Celular:</label>
              <input id="phoneNumber" type="tel" {...register('phoneNumber', { required: true })} />
            </div>
            <div className="form-group">
              <label htmlFor="date">Fecha:</label>
              <input id="date" type="date" {...register('date', { required: true })} />
            </div>
            <button type="submit">Agregar Cita</button>
          </form>
        </div>
      </div>
      <div className="event-list">
        <h2>Listado de Citas</h2>
        {eventData.length === 0 && <p>No hay citas registradas.</p>}
        {eventData.map((event) => (
          <div key={event.id} className="event-item">
            <div className="event-details">
              <strong>{event.title}</strong> - {event.start}<br />
              <em>Para: {event.name} ({event.phoneNumber})</em>
            </div>
            <div className="event-actions">
              <button onClick={() => handleWhatsAppReminder(event)}>Recordar por WhatsApp</button>
              <button onClick={() => handleEventClick({ event: { id: event.id, title: event.title } })}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Citas;
