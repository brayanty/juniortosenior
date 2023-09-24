const promesa = new Promise((resolve,reject) =>{
    //Accion a ejecutar
    setTimeout(() => {
        const exito = false;
        if(exito){
            resolve("Ok la operacion tuvo exito");
        }else{
            reject("la operacion no concluyo de manera correcta");
        }

    }, 200);
});

promesa.then((mensaje)=>{
    alert(mensaje);

});
promesa.catch((mensaje)=>{
    alert(mensaje);
})


// function obtenerPostDeUsuario(nombreUsuario,callback){
//     console.log("obteniendo postt");
//     setTimeout(() =>{
//         if(nombreUsuario === "carlos"){
//             let posts = ["post","post","post"];
//             callback(posts)
//         }else{
//             callback(alert("no se pudon obtener"))
//         }
       
//     },2000)
// }
// obtenerPostDeUsuario("caorlos",(posts) =>{
//     console.log(posts);
// })