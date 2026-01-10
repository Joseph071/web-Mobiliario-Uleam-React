import { obtenerUsuarios } from "../store/usuarios";

export function validarFormatoCredenciales(email, password) {
  if (!email || !password) {
    return "Todos los campos son obligatorios";
  }

  // Validar que el correo termine con @uleam.edu.ec
  if (!email.endsWith("@uleam.edu.ec")) {
    return "El correo debe ser institucional y terminar con @uleam.edu.ec";
  }

  // Validar que la contraseña tenga al menos 4 caracteres
  if (password.length < 4) {
    return "La contraseña debe tener al menos 4 caracteres";
  }

  return null; // formato OK
}

export function validarLogin(email, password) {
  const errorFormato = validarFormatoCredenciales(email, password);
  if (errorFormato) {
    return errorFormato;
  }

  const usuarios = obtenerUsuarios();

  const usuarioValido = usuarios.find(
    (u) => u.email === email && u.password === password
  );

  if (!usuarioValido) {
    return "Correo o contraseña incorrectos";
  }

  return null; // todo OK
}
