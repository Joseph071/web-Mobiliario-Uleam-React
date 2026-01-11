import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Login.css";
import { validarLogin } from "../componentes/validaciones/validaLogin";
import logo from "../img/uleam_logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorValidacion = validarLogin(email, password);

    if (errorValidacion) {
      setError(errorValidacion);
      return;
    }

    localStorage.setItem("usuario", email);
    localStorage.setItem("logueado", "true");

    navigate("/home");
  };

  return (
  <div className="login">
    <div className="login-container">
      <img className="logo" src={logo} alt="ULEAM Logo" />

      <div className="registro">
        <h1 className="titulo">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo Institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="boton" type="submit">
            Ingresar
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        <p>
          <a href="/olvido">¿Olvidaste tu contraseña?</a>
        </p>
        <p>
          ¿No estás registrado? <a href="/registro">Regístrate aquí</a>
        </p>
      </div>
    </div>
  </div>
      
  );
}

export default Login;
