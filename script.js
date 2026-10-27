document.getElementById("formularioRegistro")
.addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtener datos del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value;
    const telefono = document.getElementById("telefono").value;
    const carrera = document.getElementById("carrera").value;
    const direccion = document.getElementById("direccion").value.trim();
    const redSocial = document.getElementById("redSocial").value.trim();
    const localidad = document.getElementById("localidad").value.trim();
    const municipio = document.getElementById("municipio").value.trim();
    const estado = document.getElementById("estado").value;

    const mensaje = document.getElementById("mensaje");

    // Validar teléfono

    if (!/^[0-9]{10}$/.test(telefono)) {
        mensaje.style.color = "red";
        mensaje.textContent = "El teléfono debe contener 10 dígitos.";
        return;
    }

    // Crear objeto con los datos

    const alumno = {
        nombre,
        edad,
        telefono,
        carrera,
        direccion,
        redSocial,
        localidad,
        municipio,
        estado
    };

    console.log("Datos del aspirante:", alumno);

    // Mostrar mensaje de prueba

    mensaje.style.color = "#00796b";

    mensaje.textContent =
        "✓ Formulario validado correctamente. Los datos están listos para enviarse.";

    // Por ahora no se guardan en una base de datos.
    // La conexión se realizará cuando desarrollemos el backend.

});