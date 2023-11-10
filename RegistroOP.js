document.addEventListener('DOMContentLoaded', function() {
    var registrarOrdenButton = document.getElementById('registrarOrden');
    registrarOrdenButton.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar el envío del formulario

      // Obtener los valores del formulario
      var cliente = document.getElementById('cliente').value;
      var cantidad = document.getElementById('cantidad').value;
      var tipo = document.querySelector('input[name="tipo"]:checked').value;

      // Validar que los campos no estén vacíos
      if (cliente === "" || cantidad === "") {
        alert("Por favor, complete todos los campos.");
        return;
      }

      // Generar un número de OP (en este caso, se usa un número aleatorio)
      var numeroOP = Math.floor(Math.random() * 1000);

      // Mostrar un mensaje de éxito
      alert("Orden de producción creada correctamente OP" + numeroOP);

      document.getElementById('cliente').value = '';
      document.getElementById('cantidad').value = '';
      document.getElementById('referenciaEnvase').value = '';
      document.getElementById('gramaje').value = '';
      document.getElementById('color').value = '';
    });
  });