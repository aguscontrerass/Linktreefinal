// Obtener todas las secciones
const secciones = document.querySelectorAll("section");
let indiceActual = 0;

// Escuchar la flecha hacia abajo
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown") {
    event.preventDefault(); // evita el scroll default
    if (indiceActual < secciones.length - 1) {
      indiceActual++;
      secciones[indiceActual].scrollIntoView({ behavior: "smooth" });
    }
  }

  //flecha hacia arriba
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (indiceActual > 0) {
      indiceActual--;
      secciones[indiceActual].scrollIntoView({ behavior: "smooth" });
    }
  }
});
        // Enviar formulario por correo
        (function () {
            emailjs.init("OjlEtt_Kum8uJmDjT"); // Reemplaza con tu clave pública
        })();
        
        function sendEmail(event) {
            event.preventDefault();
            emailjs.sendForm('service_211574e', 'template_o3jzgzs', event.target)
                .then(() => alert("Correo enviado exitosamente"))
                .catch(error => alert("Error al enviar correo: " + error));
        }

        // Attach sendEmail function to form submit event
        const form = document.getElementById("contacto-form");
        form.addEventListener("submit", sendEmail);
 