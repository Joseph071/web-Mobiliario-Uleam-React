import React from "react";
import FormularioMobiliario from "./FormularioMobiliario";

function Modal({ isOpen, onClose, form, onChange, onSave, onClear }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="tituloModalEditar">
        <h3 id="tituloModalEditar">Editar Mobiliario</h3>
        <FormularioMobiliario
          form={form}
          onChange={onChange}
          onSubmit={handleSubmit}
          onClear={onClear}
          showCodigo={true}
          isEdit={true}
        />
        <div className="modal-actions">
          <button type="button" id="btnCerrarModal" className="btn-limpiar" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;