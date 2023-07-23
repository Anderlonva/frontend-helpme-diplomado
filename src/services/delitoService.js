import { axiosConfig } from "../config/axiosConfig";

const getDelitos = () => {
    return axiosConfig.get('/delitos', { //se llama la ruta deseada en este caso inventario
        headers: {
            'Content-type': 'application/json'   // se dice como se quiere recibir la respuesta en este caso JSON
        }
    })
}

export {
    getDelitos
}