import './style.css';

export const Footer = () => {
  return (
    <footer>
        <div className="contenedor">
            <div className="redes-sociales">
                <a href="#"><i className="fa-brands fa-instagram rojo" role='instagram'></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp verde" role='whatsapp'></i></a>
                <a href="#"><i className="fa-brands fa-facebook azul" role='facebook'></i></a>
            </div>
            <div role='autor' className="autor">
                <p>Hecho con &#x1F497; por <br />Mónica Pajón <br />Schiojetman</p>
            </div>
        </div>
    </footer>  
    )
}
