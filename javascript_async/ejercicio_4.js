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

const print = async (promise) => {
    console.log(await promise);
}


// ESPACIO PARA EDITAR


// Imprime por consola el mensaje dentro del payload utilizando la funcion print()


// FIN ESPACIO PARA EDITAR
