const form= document.getElementById("formulario");
const mensaje=document.getElementById("mansaje");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    mensaje.textContent="formulario enviado correctamente"
})