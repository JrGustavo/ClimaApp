import { inquirerMenu } from './helpers/inquirer.js';
import {Busquedas} from "./models/busquedas.js";

const main = async () => {

    let busquedas;
    busquedas = new Busquedas();
    let opt;

    do{
        opt = await inquirerMenu();

        switch (opt){
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);

                // Buscar los lugares

                // Seleccionar el lugar

                // Clima

                //Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:',);
                console.log('Lat:',);
                console.log('Lng:',);
                console.log('Temperatura:',);
                console.log('Minima:',);
                console.log('Maxima:',);
                break;

        }



        if (opt !== 0) await onpause(undefined);

    } while ( opt !==0)
}

main ();
