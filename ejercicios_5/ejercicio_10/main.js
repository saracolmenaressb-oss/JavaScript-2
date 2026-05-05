const enlace = document.querySelector('a');
const listaAtributos = enlace.getAttributeNames();

console.log("Atributos del enlace:");
listaAtributos.forEach(nombre => {
    console.log(`${nombre}: ${enlace.getAttribute(nombre)}`);
});