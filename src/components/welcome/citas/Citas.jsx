import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import './Citas.css';

const Citas = () => {
  const { register, handleSubmit, reset } = useForm();
  const [eventData, setEventData] = useState([]);
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);

  const onSubmit = (data) => {
    const newEvent = {
      id: eventData.length + 1,
      title: data.title,
      start: data.date,
      hours: data.time,
      name: data.name,
      phoneNumber: data.phoneNumber,
    };
    setEventData([...eventData, newEvent]);
    reset();
  };

  const handleEventClick = (clickInfo) => {
    const clickedDate = clickInfo.event.startStr;
    const eventsForDay = eventData.filter(event => event.start === clickedDate);
    setSelectedDayEvents(eventsForDay);
  };

  const handleWhatsAppReminder = (event) => {
    const { title, name, phoneNumber, hours } = event;
    const eventDate = new Date(event.start);
    const eventTime = new Date(`1970-01-01T${hours}`);
    const formattedTime = eventTime.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    const message = `Hola ${name}, te recordamos tu cita "${title}" para el día ${eventDate.toLocaleDateString()} a las ${formattedTime}.`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=+57${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleDelete = (id) => {
    if (window.confirm(`¿Estás seguro de eliminar la cita?`)) {
      setEventData(eventData.filter((event) => event.id !== id));
      setSelectedDayEvents(selectedDayEvents.filter((event) => event.id !== id));
    }
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
            <div className="form-group">
              <label htmlFor="time">Hora:</label>
              <input id="time" type="time" {...register('time', { required: true })} />
            </div>
            <button className='AddCite' type="submit">Agregar Cita</button>
          </form>
        </div>
      </div>
      <div className="EventList">
        <h2>Citas del día seleccionado</h2>
        {selectedDayEvents.length === 0 ? (
          <p>No hay citas para este día.</p>
        ) : (
          <ul className="List">
            {selectedDayEvents.map(event => (
              <li key={event.id} className="ListItem">
                <div className="ListItemContent">
                  <strong className="ListItemTitle">{event.title}</strong> - {formatTime(event.hours)}<br />
                  <span className="ListItemDetails">{event.name} - {event.phoneNumber}</span><br />
                  <button className="ActionButton" onClick={() => handleWhatsAppReminder(event)}>Enviar WhatsApp</button>
                  <button className="ActionButton" onClick={() => handleDelete(event.id)}>Eliminar Cita</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const hourInt = parseInt(hours, 10);
  const ampm = hourInt >= 12 ? 'PM' : 'AM';
  const formattedHours = hourInt % 12 || 12;
  return `${formattedHours}:${minutes} ${ampm}`;
}

export default Citas;
