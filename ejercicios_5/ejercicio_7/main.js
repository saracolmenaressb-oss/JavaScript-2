const inputNombre = document.getElementById('inputNombre');
const saludo = document.getElementById('saludo');

inputNombre.addEventListener('input', () => {
    saludo.textContent = `¡Bienvenido, ${inputNombre.value}!`;
});