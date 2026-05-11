const boton = document.getElementById('cambiarNombre');
const nombreUsuario = document.getElementById('nombre');

boton.addEventListener('click', () => {
    nombreUsuario.textContent = "lucia";
});