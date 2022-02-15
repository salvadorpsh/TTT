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


//Encuentra el error en debajo de porque no se esta imprimiendo el mensaje del payload usando async/await

const datos = async () => {
    return await server();
}

console.log(datos()?.payload?.message);


// FIN ESPACIO PARA EDITAR
