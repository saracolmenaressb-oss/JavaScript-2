const selectorColor = document.getElementById('selectorColor');
const imagenProducto = document.getElementById('imgProducto');

selectorColor.addEventListener('change', (e) => {
    const nuevaRuta = `img/producto-${e.target.value}.jpg`;
    imagenProducto.setAttribute('src', nuevaRuta);
});