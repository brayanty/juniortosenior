const persona = { 
    nombre: "brayan",
    edad: 20,
    correo: "danielsegoviad@gmail.com",
    subscripciones: {
        wed: true,
        correo: true
    },
    coloresFavoritos: ["rojo", "verde"
    ],
    saludo: function(){
        alert("hola")
    }
}

persona.pais = "venezuela";
persona.pais = "colombia";

console.log(persona)