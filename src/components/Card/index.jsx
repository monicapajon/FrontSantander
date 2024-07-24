import React from 'react';
import './style.css';

import { NotFound } from '../NotFound';

export const Card = ({loading,event}) => {
    return (
        <>

            {
                loading ?
                    <div className='loading'>
                        <h1>Cargando </h1>
                        <div>
                            <span className="loader"></span>
                        </div>
                    </div>
                    :
                    event?.length == 0 ?
                    <NotFound title={"Evento no encontrado"} />
                    :
                    <section className='card-details'>
                        <div className="imagen">
                            <img src={event[0].image} alt={event[0].name} />
                        </div>
                        <div className="card-body">
                            <div>
                                <h2>{event[0].name}</h2>
                                <h4>Categoria: {event[0].category}</h4>
                            </div>
                            <p>{event[0].description}</p>
                            <div className='card-footer'>
                                <h5>Precio: {event[0].price}</h5>
                                <h5>Capacidad: {event[0].capacity}</h5>
                                {
                                    event[0].assistance
                                        ? <h5>Asistencia: {event[0].assistance}</h5>
                                        : <h5>Estimado: {event[0].estimate}</h5>
                                }
                            </div>
                        </div>
                    </section>
            }
        </>
    
    )
}
