const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const btnEnviar = document.getElementById("btnEnviar");
const mensaje = document.getElementById("mensaje");

// 1. InputEvent
// Se ejecuta mientras el usuario escribe
inputNombre.addEventListener("input", (e) => {
  if (e.target.value.length < 3) {
    mensaje.textContent = "Escribe al menos 3 caracteres";
  } else {
    mensaje.textContent = "Nombre válido";
  }
});

// 2. KeyboardEvent
// Detecta si el usuario presiona Enter en el input
inputNombre.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Presionaste Enter");
  }
});

// 3. MouseEvent
// Detecta click en el botón
btnEnviar.addEventListener("click", () => {
  console.log("Hiciste click en el botón");
});

// 4. Bonus: SubmitEvent
// Evita que el formulario recargue la página
formulario.addEventListener("submit", (e) => {
    //Comentar para ver como se desaparece
  e.preventDefault();

  if (inputNombre.value.trim() === "") {
    mensaje.textContent = "El campo no puede estar vacío";
  } else {
    mensaje.textContent = formulario enviado:${inputNombre.value};
  }
});