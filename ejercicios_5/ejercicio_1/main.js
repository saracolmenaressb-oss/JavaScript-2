const boton = document.getElementById('cambiarNombre');
const nombreUsuario = document.getElementById('nombre');

boton.addEventListener('click', () => {
    nombreUsuario.textContent = "Nuevo Nombre de Usuario";
});