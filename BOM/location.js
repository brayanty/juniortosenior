//href - retorna la URL de la pagina actual
console.log(location.href)
//hostname - retorna el host de la pagina actual
console.log(location.hostname),
//pathname - retorna la ruta y archivo de la pagina actual
console.log(location.pathname),
//protocolo
console.log(location.protocol);

const cargarDocumento = () =>{
    location.assign('https://google.com');
}

const regresar = () => {
    history.forward();
}