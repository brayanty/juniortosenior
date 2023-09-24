let ventana ;
const abrirVentana = () =>{
    ventana = window.open("https://google.com","pendeo yo",'height=500 width=500');
    ventana.document.write("muerete puto homosexual");
}

const cerrarVentana = () =>{
    setTimeout(() => {
        ventana.close();
    }, 400);
    
}

/*
    Screen Obecto
*/

console.log('Ancho de panalla: ',window.screen.width) 
console.log('Alto de pantalla',window.screen.height)

console.log('ancho con barra de windows', window.screen.availHeight)
console.log('ancho con barra de windows', window.screen.availWidth)