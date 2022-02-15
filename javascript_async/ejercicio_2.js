const server = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                errorCode: 0,
                payload: {
                    message: "Hola mundo! Aprendi javascript async! "
                },
        
            })
        }, 2000); 
    })
}


// ESPACIO PARA EDITAR


//Intenta que el siguiente output no rompa *de cualquier manera que se te ocurra*

console.log(server().payload.message);


// FIN ESPACIO PARA EDITAR
