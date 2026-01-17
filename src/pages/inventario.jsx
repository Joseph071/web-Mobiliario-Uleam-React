// Hooks de React para manejar estado y efectos secundarios
import { useState, useEffect } from "react";

// Componentes reutilizables
import HeaderComp from "../componentes/header";
import Modal from "../componentes/modal";

// Funciones del store para manejar mobiliarios
import {
  obtenerMobiliarios,
  actualizarMobiliario,
  buscarMobiliarioPorCodigo
} from "../componentes/store/mobiliarios";

// Estilos CSS
import "../stylesheets/Inventario.css";
import "../stylesheets/Modal.css";
import "../stylesheets/Registrar.css";

// Función de validación
import { validarMobiliario } from "../componentes/validaciones/validaMobiliarios";

function Inventario() {

  // Lista completa de mobiliarios
  const [mobiliarios, setMobiliarios] = useState([]);

  // Lista filtrada que se muestra en la tabla
  const [filteredMobiliarios, setFilteredMobiliarios] = useState([]);

  // Control del modal
  const [showModal, setShowModal] = useState(false);

  // Mobiliario seleccionado para editar
  const [selectedMobiliario, setSelectedMobiliario] = useState(null);

   // Estado del formulario de edición
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

  // Estado de los filtros
  const [filtros, setFiltros] = useState({
    estado: "",
    facultad: "",
    edificio: "",
    tipo: "",
  });

  // Cargar mobiliarios al iniciar el componente
  useEffect(() => {
    const mobs = obtenerMobiliarios();
    setMobiliarios(mobs);
    setFilteredMobiliarios(mobs);
  }, []);

    // Aplica los filtros seleccionados
  const aplicarFiltros = () => {
    let filtered = mobiliarios;

    if (filtros.estado) {
      filtered = filtered.filter(m => m.estado === filtros.estado);
    }

    if (filtros.facultad) {
      filtered = filtered.filter(m => m.facultad === filtros.facultad);
    }

    if (filtros.edificio) {
      filtered = filtered.filter(m =>
        m.edificio.toLowerCase().includes(filtros.edificio.toLowerCase())
      );
    }

    if (filtros.tipo) {
      filtered = filtered.filter(m => m.tipo === filtros.tipo);
    }

    setFilteredMobiliarios(filtered);
  };

  // Limpia filtros y muestra todos los registros
  const limpiarFiltros = () => {
    setFiltros({
      estado: "",
      facultad: "",
      edificio: "",
      tipo: "",
    });
    setFilteredMobiliarios(mobiliarios);
  };

  // Maneja cambios en los filtros
  const handleFiltroChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };

   // Abre el modal con el mobiliario seleccionado
  const openModal = (mobiliario) => {
    setSelectedMobiliario(mobiliario);
    setForm({ ...mobiliario });
    setShowModal(true);
  };

  // Cierra el modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedMobiliario(null);
    
  };
  

  // Restaura los datos originales del formulario
  const handleClear = () => {
    setForm({ ...selectedMobiliario });
  };

  // Maneja cambios en el formulario
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
  const error = validarMobiliario(form, true);

  if (error) {
    alert(error);
    return;
  }

  // Guardar en store
  actualizarMobiliario(form);

  // Actualizar estado inmediatamente
  const updatedMobs = mobiliarios.map(m =>
    m.codigo === form.codigo ? form : m
  );

  setMobiliarios(updatedMobs);
  setFilteredMobiliarios(updatedMobs);

  closeModal();
};


  // Activa o desactiva mantenimiento
  const toggleMantenimiento = (codigo) => {
    const mobiliario = buscarMobiliarioPorCodigo(codigo);

    const nuevoMantenimiento = mobiliario.mantenimiento === "Sí" ? "No" : "Sí";
    const nuevoEnUso = nuevoMantenimiento === "Sí" ? "No" : "Sí";

    const updated = {
      ...mobiliario,
      mantenimiento: nuevoMantenimiento,
      enUso: nuevoEnUso
    };

    actualizarMobiliario(updated);

    const updatedMobs = obtenerMobiliarios();
    setMobiliarios(updatedMobs);
    // Limpiar filtros para asegurar que el item actualizado se vea
    setFiltros({
      estado: "",
      facultad: "",
      edificio: "",
      tipo: "",
    });
    setFilteredMobiliarios(updatedMobs);
  };

 // Marca un mobiliario como inservible
  const marcarInservible = (codigo) => {
    if (window.confirm("¿Estás seguro de marcar este mobiliario como inservible?")) {

      const mobiliario = buscarMobiliarioPorCodigo(codigo);

      const updated = {
        ...mobiliario,
        estado: "Inservible",
        enUso: "No",
        mantenimiento: "No"
      };

      actualizarMobiliario(updated);

      const updatedMobs = obtenerMobiliarios();
      setMobiliarios(updatedMobs);

      setFiltros({
        estado: "",
        facultad: "",
        edificio: "",
        tipo: "",
      });

      setFilteredMobiliarios(updatedMobs);
    }
  };

  // Renderizado del componente
  return (
    <>
      <HeaderComp />
      <main className="inventario-container">
        <h1>Inventario de Mobiliario</h1>
        
        {/* 🔍 FILTROS */}
        <div className="filtros">
          <div className="campo">
            <label htmlFor="filtroEstado">Estado</label>
            <select id="filtroEstado" name="estado" value={filtros.estado} onChange={handleFiltroChange}>
              <option value="">Todos</option>
              <option value="Excelente">Excelente</option>
              <option value="Bueno">Bueno</option>
              <option value="Regular">Regular</option>
              <option value="Malo">Malo</option>
              <option value="Inservible">Inservible</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="filtroFacultad">Facultad</label>
            <select id="filtroFacultad" name="facultad" value={filtros.facultad} onChange={handleFiltroChange}>
              <option value="">Todas</option>
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
            <label htmlFor="filtroEdificio">Edificio</label>
            <input type="text" id="filtroEdificio" name="edificio" value={filtros.edificio} onChange={handleFiltroChange} placeholder="Ej: Bloque A" />
          </div>

          <div className="campo">
            <label htmlFor="filtroTipo">Tipo</label>
            <select id="filtroTipo" name="tipo" value={filtros.tipo} onChange={handleFiltroChange}>
              <option value="">Todos</option>
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

          <div className="botones-filtro">
            <button id="btnFiltrar" className="btn-filtrar" onClick={aplicarFiltros}>🔎 Filtrar</button>
            <button id="btnLimpiar" className="btn-limpiar" onClick={limpiarFiltros}>🧹 Limpiar</button>
          </div>
        </div>

        <div className="tabla-scroll">
          <table id="tablaMobiliario">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Estado</th>
                <th>Facultad</th>
                <th>Edificio</th>
                <th>Ubicación</th>
                <th>Responsable</th>
                <th>En Uso</th>
                <th>Mantenimiento</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredMobiliarios.map((mobiliario) => (
                <tr key={mobiliario.codigo}>
                  <td>{mobiliario.codigo}</td>
                  <td>{mobiliario.nombre}</td>
                  <td>{mobiliario.tipo}</td>
                  <td>{mobiliario.estado}</td>
                  <td>{mobiliario.facultad}</td>
                  <td>{mobiliario.edificio}</td>
                  <td>{mobiliario.ubicacion}</td>
                  <td>{mobiliario.responsable}</td>
                  <td>{mobiliario.enUso}</td>
                  <td>{mobiliario.mantenimiento}</td>
                  <td>
                    <button className="editar" onClick={() => openModal(mobiliario)} disabled={mobiliario.estado === "Inservible"}>Editar</button>
                    <button className="eliminar" onClick={() => toggleMantenimiento(mobiliario.codigo)} disabled={mobiliario.estado === "Inservible"}>
                      {mobiliario.mantenimiento === "Sí" ? "Quitar Mantenimiento" : "Enviar a Mantenimiento"}
                    </button>
                    <button className="inservible" onClick={() => marcarInservible(mobiliario.codigo)} disabled={mobiliario.estado === "Inservible"}>Inservible</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Modal isOpen={showModal} onClose={closeModal} form={form} onChange={handleChange} onSave={saveChanges} onClear={handleClear} />
    </>
  );
}

export default Inventario;