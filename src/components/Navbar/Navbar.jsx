import React, { useState } from 'react'
import './style.css';
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [value, setValue] = useState(false)
    return (
        <nav>
            <Link to={"/"} className="logo">LOGO</Link>
            <button title='abrir' className="abrir-menu" onClick={() => setValue(true)}><i className="fa-solid fa-bars"></i></button>
            <div role='menuNavegacion' className={`nav ${value ? 'visible' : ''}`} id="nav">
                <button title='cerrar' className="cerrar-menu" onClick={() => setValue(false)}><i className="fa-solid fa-xmark icon-abrir"></i></button>
                <ul className="nav-list">
                    <li><NavLink to="/">INICIO</NavLink></li>
                    <li><NavLink to='/upcoming'>PROXIMOS EVENTOS</NavLink></li>
                    <li><NavLink to='/past'>EVENTOS ANTERIORES</NavLink></li>
                    <li><NavLink to="/contact">CONTACTOS</NavLink></li>
                    <li><NavLink to="/stast">ESTADISTICAS</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
