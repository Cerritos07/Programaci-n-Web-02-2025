function mostrarActividad() {
  let dia = document.getElementById("diaInput").value.trim().toLowerCase();
  let mensaje = "";

  switch (dia) {
    case "lunes":
      mensaje = "Hoy debes atender a un cliente específico.";
      break;
    case "martes":
      mensaje = "Hoy visitas una agencia fuera de la ciudad.";
      break;
    case "miércoles":
    case "miercoles": // acepta sin tilde también
      mensaje = "Hoy debes llevar a tu hija al ballet (balé).";
      break;
    case "jueves":
      mensaje = "Hoy debes priorizar entregas de desarrollo.";
      break;
    case "viernes":
      mensaje = "Hoy debes atender problemas de manera remota.";
      break;
    case "sábado":
    case "sabado":
      mensaje = "Hoy debes hacer lo que tu esposa quiera. 😅";
      break;
    case "domingo":
      mensaje = "Hoy descansas. 🌞";
      break;
    default:
      mensaje = "Por favor, escribe un día válido de la semana.";
  }

  document.getElementById("resultado").innerText = mensaje;
}
