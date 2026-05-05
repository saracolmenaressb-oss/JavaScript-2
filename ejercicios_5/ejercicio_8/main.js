const items = document.querySelectorAll('.item-inventario');
const contador = document.getElementById('total');

contador.textContent = `Total de productos: ${items.length}`;