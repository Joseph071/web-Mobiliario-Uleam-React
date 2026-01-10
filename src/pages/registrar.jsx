import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/Registrar.css";
import HeaderComp from "../componentes/header";
import { validarMobiliario } from "../componentes/validaciones/validaMobiliarios";
import FormularioMobiliario from "../componentes/FormularioMobiliario";

import {
  agregarMobiliario
} from "../componentes/store/mobiliarios";

function Registrar() {
  


  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    codigo: "",
    nombre: "",
    tipo: "",
    estado: "",
    facultad: "",
    edificio: "",
    ubicacion: "",
    responsable: "",
    enUso: "",
    mantenimiento: "",
  });

  const handleClear = () => {
    setForm({
      codigo: "",
      nombre: "",
      tipo: "",
      estado: "",
      facultad: "",
      edificio: "",
      ubicacion: "",
      responsable: "",
      enUso: "",
      mantenimiento: "",
    });
    setError("");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // VALIDAR TODO
  const errorValidacion = validarMobiliario(form);

  if (errorValidacion) {
    setError(errorValidacion);
    return;
  }

  // GUARDAR
  agregarMobiliario(form);

  alert("Mobiliario registrado correctamente");

  // REDIRIGIR
  navigate("/inventario");
};


  return (
<>
  <HeaderComp />  

    <main className="contenido">
      <h2>Registro de Nuevo Mobiliario</h2>

      <FormularioMobiliario form={form} onChange={handleChange} onSubmit={handleSubmit} onClear={handleClear} error={error} />
      
    </main>

    </>
  );
}

export default Registrar;
