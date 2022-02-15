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

console.log(


// ESPACIO PARA EDITAR


// Haz que el console log deje de romper e intenta loguear el mensaje
server().payload.message


// FIN ESPACIO PARA EDITAR


);
