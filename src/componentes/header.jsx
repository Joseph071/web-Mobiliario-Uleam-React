import { Link } from "react-router-dom";
import "../stylesheets/Header.css";
import logo from "../img/logo-U.svg";


function HeaderComp() {
  return(
    <header className="header">
      <h1 className="title">
        <img
          src={logo}
          alt="Logo ULEAM"
          className="logo-h1"
        />
        Inventario de Mobiliario - ULEAM
      </h1>
      <nav>
        <ul className="nav-links">
          <li><Link className="link" to="/home">Inicio</Link></li>
          <li><Link className="link" to="/inventario">Inventario</Link></li>
          <li><Link className="link" to="/registrar">Registrar</Link></li>
          <li><Link className="link" to="/">Login</Link></li>
        </ul>
      </nav>
      
    </header> 
  

) }

export default HeaderComp;