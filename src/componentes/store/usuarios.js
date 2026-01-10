// Obtener usuarios del localStorage
export function obtenerUsuarios() {
  const usuarios = localStorage.getItem("usuarios");
  return usuarios ? JSON.parse(usuarios) : [];
}

// Guardar usuarios en localStorage
export function guardarUsuarios(usuarios) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Agregar un nuevo usuario
export function agregarUsuario(nuevoUsuario) {
  const usuarios = obtenerUsuarios();
  usuarios.push(nuevoUsuario);
  guardarUsuarios(usuarios);
}

// Inicializar usuario por defecto
export function inicializarUsuariosPorDefecto() {
  const usuarios = obtenerUsuarios();

  if (usuarios.length === 0) {
    const defaultUsers = [
      {
        nombre: "Usuario 1",
        email: "usu1@uleam.edu.ec",
        password: "usu123", // SOLO para tarea
      },
    ];

    guardarUsuarios(defaultUsers);
    console.log(
      "Usuarios por defecto creados: usu1@uleam.edu.ec / usu123"
    );
  }
}