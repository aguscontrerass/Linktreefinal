const boton = document.querySelector('.modal-boton');
const modal = document.createElement('div');
modal.classList.add('modal-oculto');
modal.classList.add('modal');
modal.innerHTML = `
  <div class="modal-conteiner">
    <span class="cerrar">&times;</span>
    <h2>¡Hola!</h2>
    <p>¡Gracias por visitar mi portfolio! </p>
    </div>
`;
document.body.appendChild(modal);

function mostrarModal() {
    modal.classList.remove('modal-oculto');
    modal.classList.add('mostrar-modal');

    const cerrar = modal.querySelector('.cerrar');
    cerrar.addEventListener('click', cerrarModal);
}
function cerrarModal() {
        modal.classList.remove('mostrar-modal');
        modal.classList.add('modal-oculto');
}
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    cerrarModal();
  }
});