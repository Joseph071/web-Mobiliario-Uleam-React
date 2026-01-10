import { obtenerMobiliarios } from "../store/mobiliarios";

export function validarMobiliario(m, isEdit = false) {
  const {
    codigo,
    nombre,
    tipo,
    estado,
    facultad,
    edificio,
    ubicacion,
    responsable,
    enUso,
    mantenimiento,
  } = m;

  // =========================
  // CAMPOS OBLIGATORIOS
  // =========================
  if (
    !codigo ||
    !nombre ||
    !tipo ||
    !estado ||
    !facultad ||
    (!isEdit && !edificio) ||
    (!isEdit && !ubicacion) ||
    (!isEdit && !responsable) ||
    !enUso ||
    !mantenimiento
  ) {
    return "Todos los campos son obligatorios";
  }

  // =========================
  // CÓDIGO
  // Ej: M001 o alfanumérico hasta 10
  // =========================
//  const regexCodigo = /^[A-Z][0-9]{3}$/;

// if (!regexCodigo.test(codigo.trim())) {
//   return "Código inválido. Debe ser una letra mayúscula seguida de 3 números. Ej: M001";
// }

const regexCodigo = /^[A-Z][0-9]{3}$/;

if (!regexCodigo.test(codigo.trim())) {
  return "Código inválido. Debe ser una letra mayúscula seguida de 3 números. Ej: M001";
}

  // =========================
  // NOMBRE
  // =========================
  if (nombre.trim().length < 3) {
    return "El nombre del mobiliario debe tener al menos 3 caracteres";
  }

  // =========================
  // EDIFICIO
  // =========================
  const regexEdificio = /^[A-Za-zÀ-ÿ0-9\s\-\.,#()]{2,50}$/;
  if (!regexEdificio.test(edificio.trim())) {
    return "Edificio inválido (2-50 caracteres)";
  }

  // =========================
  // UBICACIÓN
  // =========================
  const regexUbicacion = /^[A-Za-zÀ-ÿ0-9\s\-\.,#()]{3,100}$/;
  if (!regexUbicacion.test(ubicacion.trim())) {
    return "Ubicación inválida (3-100 caracteres)";
  }

  // =========================
  // RESPONSABLE
  // =========================
  const regexResponsable = /^[A-Za-zÀ-ÿ.\s]{3,}$/;
  if (!regexResponsable.test(responsable.trim())) {
    return "Responsable inválido (nombre y apellido)";
  }

  // =========================
  // UNICIDAD DEL CÓDIGO (solo en registro, no en edición)
  // =========================
  if (!isEdit) {
    const inventario = obtenerMobiliarios();
    const existe = inventario.some(
      (item) => item.codigo.toLowerCase() === codigo.toLowerCase()
    );

    if (existe) {
      return `El código ${codigo} ya existe en el inventario`;
    }
  }

  // =========================
  // VALIDACIÓN DE EN USO Y MANTENIMIENTO
  // =========================
  if (enUso === "Sí" && mantenimiento === "Sí") {
    return "No se puede tener 'En Uso' y 'Mantenimiento' ambos en 'Sí' al mismo tiempo. Pueden estar ambos en 'No', pero no ambos en 'Sí'.";
  }

  // =========================
  // TODO OK
  // =========================
  return null;
}
