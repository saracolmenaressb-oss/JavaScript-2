const checkbox = document.getElementById('terminos');
const botonRegistro = document.getElementById('btnRegistro');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        botonRegistro.removeAttribute('disabled');
    } else {
        botonRegistro.setAttribute('disabled', 'true');
    }
});