const div=document.querySelector("div")

const p=document.createElement("p")
p.textContent="Nuevo parrafo cambiado";
div.replaceWith(p);