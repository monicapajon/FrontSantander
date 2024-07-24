import "./style.css";

export const Contact = () => {
    return (
        <section className="contactos">
            <div className="form-group">
                <label className='form-label' htmlFor="nombre">Nombre:</label>
                <input className='form-input' id="nombre" type="text" placeholder="Nombre" autoComplete="off" />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="email">Correo electronico:</label>
                <input className='form-input' type="text" placeholder="Correo electronico" id="email" autoComplete="off" />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="mensaje">Mensaje:</label>
                <textarea name="mensaje" className='form-input' autoComplete="off" id="mensaje" placeholder="Mensaje" cols="20" rows="10"></textarea>
            </div>
            <div className="form-group">
                <input type="submit" role="Enviar" value="Enviar" className="boton-contacts" />
            </div>
        </section>
    )
}
