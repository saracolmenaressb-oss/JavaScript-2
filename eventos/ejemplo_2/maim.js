const btn =
  document.getElementById("btn");

btn.setAttribute(
  'onclick',
  'changeBackgroundColor()'
);

// Función principal
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Generar color aleatorio
function getRandomColor() {
  //Hexadecimal
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    //Obtener la posicion del caracter de letters en 16 pos
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}