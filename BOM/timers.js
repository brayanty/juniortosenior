// let id;
// const saludo = () =>{
//    id = setTimeout(()=>{
//       console.log("jose se fue")
//    },5000)
//    console.log(id)
// }

// const parar = () =>{
//    console.log();
//    clearTimeout(id)
// }

// console.log(id);

let id;
let contador = 0;
const iniciar = () =>{
   id = setInterval(()=>{
      console.log(contador)
      contador++;
   },1)
}

const parar = () =>{
   clearInterval(id);

}