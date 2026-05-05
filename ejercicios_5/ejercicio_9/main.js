const parrafo = document.getElementById('descripcion');
const btnEditar = document.getElementById('btnEditar');

btnEditar.addEventListener('click', () => {
    parrafo.innerHTML = "Este es un texto <strong>editado y en negrita</strong>.";
});