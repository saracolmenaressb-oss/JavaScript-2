const obtenerUsuarios= async()=>{
    try {
        const response=await fetch("sara.json");

        if (!response.ok){
            throw new Error("Error en la peticion");
        }
        const data=await response.json();

        console.log("Usuario: ",data);


    } catch (error){
        console.log("Error ",error)
    }

}
obtenerUsuarios();