// Obtener mobiliarios del localStorage
export function obtenerMobiliarios() {
  const mobiliarios = localStorage.getItem("mobiliarios");
  return mobiliarios ? JSON.parse(mobiliarios) : [];
}

// Guardar mobiliarios en localStorage
export function guardarMobiliarios(mobiliarios) {
  localStorage.setItem("mobiliarios", JSON.stringify(mobiliarios));
}

// Agregar un nuevo mobiliario
export function agregarMobiliario(nuevoMobiliario) {
  const mobiliarios = obtenerMobiliarios();
  mobiliarios.push(nuevoMobiliario);
  guardarMobiliarios(mobiliarios);
}

// Buscar mobiliario por código (para evitar duplicados)
export function buscarMobiliarioPorCodigo(codigo) {
  const mobiliarios = obtenerMobiliarios();
  return mobiliarios.find((m) => m.codigo === codigo);
}

// Actualizar un mobiliario existente
export function actualizarMobiliario(mobiliarioActualizado) {
  const mobiliarios = obtenerMobiliarios();
  const index = mobiliarios.findIndex((m) => m.codigo === mobiliarioActualizado.codigo);
  if (index !== -1) {
    mobiliarios[index] = mobiliarioActualizado;
    guardarMobiliarios(mobiliarios);
  }
}

// Inicializar mobiliarios de ejemplo (opcional para la tarea)
export function inicializarMobiliariosPorDefecto() {
  const mobiliarios = obtenerMobiliarios();

  if (mobiliarios.length === 0) {
    const defaultMobiliarios = [
  {
    codigo: "M001",
    nombre: "Mesa de Aula",
    tipo: "Mesa",
    estado: "Bueno",
    facultad: "Facultad de Ingeniería, Industria y Construcción",
    edificio: "Bloque A",
    ubicacion: "Aula 101",
    responsable: "Juan Pérez",
    enUso: "Sí",
    mantenimiento: "No",
  },
  {
    codigo: "S002",
    nombre: "Silla Universitaria",
    tipo: "Silla",
    estado: "Excelente",
    facultad: "Facultad de Ciencias Administrativas, Contables y Comercio",
    edificio: "Bloque B",
    ubicacion: "Aula 203",
    responsable: "María Gómez",
    enUso: "Sí",
    mantenimiento: "No",
  },
  {
    codigo: "E003",
    nombre: "Escritorio Docente",
    tipo: "Escritorio",
    estado: "Bueno",
    facultad: "Facultad de Educación, Turismo, Artes y Humanidades",
    edificio: "Bloque C",
    ubicacion: "Oficina 12",
    responsable: "Carlos López",
    enUso: "Sí",
    mantenimiento: "No",
  },
  {
    codigo: "A004",
    nombre: "Armario Metálico",
    tipo: "Armario",
    estado: "Regular",
    facultad: "Facultad de Ciencias Sociales, Derecho y Bienestar",
    edificio: "Bloque D",
    ubicacion: "Archivo",
    responsable: "Ana Torres",
    enUso: "No",
    mantenimiento: "Sí",
  },
  {
    codigo: "P005",
    nombre: "Pizarra Acrílica",
    tipo: "Pizarra",
    estado: "Bueno",
    facultad: "Facultad de Ciencias de la Salud",
    edificio: "Bloque E",
    ubicacion: "Aula 305",
    responsable: "Luis Mendoza",
    enUso: "Sí",
    mantenimiento: "No",
  },
  {
    codigo: "E006",
    nombre: "Estante de Biblioteca",
    tipo: "Estante",
    estado: "Regular",
    facultad: "Facultad de Ciencias de la Vida y Tecnologías",
    edificio: "Bloque F",
    ubicacion: "Biblioteca",
    responsable: "Sofía Herrera",
    enUso: "No",
    mantenimiento: "Sí",
  },
  {
    codigo: "T007",
    nombre: "Tablero Informativo",
    tipo: "Tablero",
    estado: "Bueno",
    facultad: "Facultad de Ingeniería, Industria y Construcción",
    edificio: "Bloque A",
    ubicacion: "Pasillo",
    responsable: "Pedro Ramírez",
    enUso: "Sí",
    mantenimiento: "No",
  },
  {
    codigo: "M008",
    nombre: "Mesa de Laboratorio",
    tipo: "Mesa",
    estado: "Excelente",
    facultad: "Facultad de Ciencias de la Salud",
    edificio: "Bloque E",
    ubicacion: "Laboratorio 2",
    responsable: "Diana Cruz",
    enUso: "Sí",
    mantenimiento: "No",
  },
  {
    codigo: "S009",
    nombre: "Silla de Oficina",
    tipo: "Silla",
    estado: "Malo",
    facultad: "Facultad de Educación, Turismo, Artes y Humanidades",
    edificio: "Bloque C",
    ubicacion: "Oficina 20",
    responsable: "Roberto Vega",
    enUso: "No",
    mantenimiento: "Sí",
  },
  {
    codigo: "E010",
    nombre: "Escritorio Administrativo",
    tipo: "Escritorio",
    estado: "Bueno",
    facultad: "Facultad de Ciencias Administrativas, Contables y Comercio",
    edificio: "Bloque B",
    ubicacion: "Secretaría",
    responsable: "Paola Ruiz",
    enUso: "Sí",
    mantenimiento: "No",
  },
  {
    codigo: "A011",
    nombre: "Armario de Laboratorio",
    tipo: "Armario",
    estado: "Regular",
    facultad: "Facultad de Ciencias de la Vida y Tecnologías",
    edificio: "Bloque F",
    ubicacion: "Lab. Química",
    responsable: "Miguel Castro",
    enUso: "No",
    mantenimiento: "Sí",
  },
  {
    codigo: "P012",
    nombre: "Pizarra Digital",
    tipo: "Pizarra",
    estado: "Excelente",
    facultad: "Facultad de Ingeniería, Industria y Construcción",
    edificio: "Bloque A",
    ubicacion: "Aula Magna",
    responsable: "Andrea Morales",
    enUso: "Sí",
    mantenimiento: "No",
  },
  {
    codigo: "E013",
    nombre: "Estante de Archivo",
    tipo: "Estante",
    estado: "Malo",
    facultad: "Facultad de Ciencias Sociales, Derecho y Bienestar",
    edificio: "Bloque D",
    ubicacion: "Archivo General",
    responsable: "Fernando Silva",
    enUso: "No",
    mantenimiento: "Sí",
  },
  {
    codigo: "M014",
    nombre: "Mesa de Reuniones",
    tipo: "Mesa",
    estado: "Bueno",
    facultad: "Facultad de Ciencias Administrativas, Contables y Comercio",
    edificio: "Bloque B",
    ubicacion: "Sala de Reuniones",
    responsable: "Patricia León",
    enUso: "Sí",
    mantenimiento: "No",
  },
  {
    codigo: "S015",
    nombre: "Silla de Laboratorio",
    tipo: "Silla",
    estado: "Regular",
    facultad: "Facultad de Ciencias de la Salud",
    edificio: "Bloque E",
    ubicacion: "Lab. Biología",
    responsable: "Jorge Molina",
    enUso: "Sí",
    mantenimiento: "No",
  },
];


    guardarMobiliarios(defaultMobiliarios);
    console.log("Mobiliarios por defecto creados");
  }
}
