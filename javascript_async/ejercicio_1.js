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


// Retorna a la consola el mensaje dentro del payload usando .then()


// FIN ESPACIO PARA EDITAR
