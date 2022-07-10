const { mostrarMenu } = require('./helpers/mensajes');

require('colors');
let { showMenu, pause } = require('./helpers/mensajes');

console.clear();

const main = async () => {
    console.log('Hola Mundo');
    let opt = '';

    do {
        opt = await showMenu();
        await pause();
    } while (opt !== '0');


    // pause();
}


main();