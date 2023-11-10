function redireccionarSegunUsuario() {
  var usuario = document.getElementById("usuario").value;

  // Comprobar si el usuario es "admin" o "registro" y redirigir en consecuencia
  if (usuario.toLowerCase() === "admin") {
    window.location.href = "index.html";
  } else if (usuario.toLowerCase() === "registro") {
    window.location.href = "index2.html";
  } else {
    // Si no coincide con ninguna de las palabras, mostrar un mensaje de error
    alert("Usuario no válido. Intente de nuevo.");
  }

  // Devolver false para evitar que el formulario se envíe
  return false;
}