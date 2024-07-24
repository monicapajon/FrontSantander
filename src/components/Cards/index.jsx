import { Link } from 'react-router-dom';
import './style.css';

export const Cards = ({filtrar}) => {
    return (
        <section className="cards">
            {
                    filtrar?.map(event => (
                        <div className="card" key={event._id}>
                            <img role='imagen' src={event.image} className="card-imagen" alt="Avatar" />
                            <div className="card-body">
                                <h1>{event.name}</h1>
                                <p>{event.description}</p>
                                <Link role='link' to={`/detail/${event._id}`}>Ver más</Link>
                            </div>
                        </div>
                    ))
            }
        </section >
    )
}
