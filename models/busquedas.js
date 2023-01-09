import axios, {isCancel, AxiosError} from 'axios';

class Busquedas{
    historial = ['CDMX', 'Bogota', 'San jose'];
    constructor() {
    }
    async ciudad (lugar = '') {
        // Peticion http
        console.log('ciudad',lugar);

        return []; // Retornar todos los lugares
    }
}

export {Busquedas};