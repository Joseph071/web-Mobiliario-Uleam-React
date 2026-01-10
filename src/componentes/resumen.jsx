import React from "react";
import "../stylesheets/Resumen.css";

function Resumen( props ) {
  return (
    <div className="resumen-container">
      <div className="titulo">{props.titulo}</div>
      <div className="resumen-content">{props.valor}</div>
    </div>
  );
}
export default Resumen;
