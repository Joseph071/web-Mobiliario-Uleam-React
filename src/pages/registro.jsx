
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Login.css";
import { agregarUsuario, obtenerUsuarios } from "../componentes/store/usuarios";
import { validarFormatoCredenciales } from "../componentes/validaciones/validaLogin";
import logo from "../img/uleam_logo.png";

function Registro(){

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre) {
      setError("El nombre es obligatorio");
      return;
    }

    const errorFormato = validarFormatoCredenciales(email, password);
    if (errorFormato) {
      setError(errorFormato);
      return;
    }

    if (!confirmPassword) {
      setError("Debe confirmar la contraseña");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const usuarios = obtenerUsuarios();
    const usuarioExistente = usuarios.find(u => u.email === email);

    if (usuarioExistente) {
      setError("El correo ya está registrado");
      return;
    }

    const nuevoUsuario = {
      nombre,
      email,
      password
    };

    agregarUsuario(nuevoUsuario);
    setError("");
    alert("Usuario registrado exitosamente");
    navigate("/");
  };

  return(
    <div className="login-container">
      <img className="logo" src={logo} alt="ULEAM Logo" />

      <div className="registro">
        <h1 className="titulo">Registro</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Correo Institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button className="boton" type="submit">
            Registrarse
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        <p>
          ¿Ya tienes cuenta? <a href="/">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  )
}

export default Registro
