const fetchPost = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const posts = ["post 1","post 3" ];
            const error = true;
            // se obtubieron los posts
            if(error){ 
                //si no se obtubieron los posts pasar este mensaje
                reject("nose pudieron obtener los datos requerido");
               
            }else{
                //si la operacion es corecta pasar este mensaje 
                resolve(posts);
            }
        }
        ,2000);


    })
};

const mostrarPosts = async() =>{
    try {
        const posts = await fetchPost();
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
    
}
mostrarPosts();