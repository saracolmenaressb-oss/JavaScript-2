const boton= document.getElementById("btnColor")

function cambiaColor(){
    document.body.style.backgroundColor="deeppink";
}
boton.addEventListener("click", cambiaColor)
function notificacion(){
    alert("Diste click")
}
alerta.addEventListener("click",notificacion)