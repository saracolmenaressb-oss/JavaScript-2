const precios = document.querySelectorAll('.precio-producto');
const descuento = 0.9; // 10% de descuento

precios.forEach(precio => {
    let valorActual = parseFloat(precio.textContent);
    precio.textContent = (valorActual * descuento).toFixed(2);
});