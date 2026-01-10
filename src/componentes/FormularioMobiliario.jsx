import React from "react";

function FormularioMobiliario({ form, onChange, onSubmit, onClear, error, showCodigo = true, isEdit = false }) {
  return (
    <form className="form-mobiliario" onSubmit={onSubmit}>
      {showCodigo && (
        <div className="campo">
          <label htmlFor="codigo">Código</label>
          <input
            id="codigo"
            name="codigo"
            type="text"
            placeholder="Ej: M016"
            maxLength={10}
            value={form.codigo}
            onChange={onChange}
            required
            readOnly={isEdit}
          />
        </div>
      )}

      <div className="campo">
        <label htmlFor="nombre">{isEdit ? "Nombre" : "Nombre del Mobiliario"}</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Ej: Mesa de Aula"
          value={form.nombre}
          onChange={onChange}
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="tipo">Tipo</label>
        <select id="tipo" name="tipo" value={form.tipo} onChange={onChange} required>
          <option value="">{isEdit ? "Seleccione el tipo" : "Seleccione el tipo"}</option>
          <option value="Silla">Silla</option>
          <option value="Mesa">Mesa</option>
          <option value="Escritorio">Escritorio</option>
          <option value="Armario">Armario</option>
          <option value="Pizarra">Pizarra</option>
          <option value="Estante">Estante</option>
          <option value="Tablero">Tablero</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div className="campo">
        <label htmlFor="estado">{isEdit ? "Estado" : "Estado Inicial"}</label>
        <select id="estado" name="estado" value={form.estado} onChange={onChange} required>
          {!isEdit && <option value="">{isEdit ? "Seleccione el estado" : "Seleccione el estado"}</option>}
          <option value="Excelente">Excelente</option>
          <option value="Bueno">Bueno</option>
          <option value="Regular">Regular</option>
          <option value="Malo">Malo</option>
        </select>
      </div>

      <div className="campo">
        <label htmlFor="facultad">Facultad</label>
        <select id="facultad" name="facultad" value={form.facultad} onChange={onChange} required>
          {!isEdit && <option value="">{isEdit ? "Seleccione la Facultad" : "Seleccione la Facultad"}</option>}
          <option value="Facultad de Ciencias Administrativas, Contables y Comercio">
            Facultad de Ciencias Administrativas, Contables y Comercio
          </option>
          <option value="Facultad de Ciencias Sociales, Derecho y Bienestar">
            Facultad de Ciencias Sociales, Derecho y Bienestar
          </option>
          <option value="Facultad de Ciencias de la Salud">
            Facultad de Ciencias de la Salud
          </option>
          <option value="Facultad de Educación, Turismo, Artes y Humanidades">
            Facultad de Educación, Turismo, Artes y Humanidades
          </option>
          <option value="Facultad de Ingeniería, Industria y Construcción">
            Facultad de Ingeniería, Industria y Construcción
          </option>
          <option value="Facultad de Ciencias de la Vida y Tecnologías">
            Facultad de Ciencias de la Vida y Tecnologías
          </option>
        </select>
      </div>

      <div className="campo">
        <label htmlFor="edificio">{isEdit ? "Edificio" : "Edificio (Bloque)"}</label>
        <input
          id="edificio"
          name="edificio"
          type="text"
          placeholder="Ej: Bloque A"
          value={form.edificio}
          onChange={onChange}
          required={!isEdit}
        />
      </div>

      <div className="campo">
        <label htmlFor="ubicacion">{isEdit ? "Ubicación" : "Ubicación Específica"}</label>
        <input
          id="ubicacion"
          name="ubicacion"
          type="text"
          placeholder="Ej: Aula 101"
          value={form.ubicacion}
          onChange={onChange}
          required={!isEdit}
        />
      </div>

      <div className="campo">
        <label htmlFor="responsable">Responsable</label>
        <input
          id="responsable"
          name="responsable"
          type="text"
          placeholder="Ej: Juan Pérez"
          value={form.responsable}
          onChange={onChange}
          required={!isEdit}
        />
      </div>

      <div className="campo">
        <label htmlFor="mantenimiento">En mantenimiento</label>
        <select id="mantenimiento" name="mantenimiento" value={form.mantenimiento} onChange={onChange} required={!isEdit}>
          <option value="">{isEdit ? "Seleccione" : "Seleccione"}</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="campo">
        <label htmlFor="enUso">{isEdit ? "En Uso" : "¿Actualmente en uso?"}</label>
        <select id="enUso" name="enUso" value={form.enUso} onChange={onChange} required={!isEdit}>
          <option value="">{isEdit ? "Seleccione" : "Seleccione"}</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="botones-form">
        <button type="submit" className="btn-guardar">{isEdit ? "Guardar cambios" : "Registrar"}</button>
        <button type="button" className="btn-cancelar" onClick={onClear}>Limpiar</button>
      </div>
    </form>
  );
}

export default FormularioMobiliario;