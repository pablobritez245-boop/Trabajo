// MENSAJE DE BIENVENIDA


window.addEventListener("load", function () {
    alert("¡Bienvenido a mi Portafolio Personal! Espero que disfrutes el recorrido por mis proyectos.");
});


//Contacto

const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || correo === "" || mensaje === "") {

            alert("Por favor complete todos los campos.");

            return;

        }

        const texto =
`Hola Pablo.

Mi nombre es: ${nombre}

Correo: ${correo}

Mensaje:
${mensaje}`;

        const url =
`https://wa.me/595982112133?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

    });

}


//fecha y hora


function actualizarFechaHora() {

    const fecha = new Date();

    const opciones = {

        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",

        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"

    };

    const elemento = document.getElementById("fechaHora");

    if (elemento) {

        elemento.innerHTML = fecha.toLocaleString("es-PY", opciones);

    }

}

setInterval(actualizarFechaHora, 1000);

actualizarFechaHora();