const { mostrarMenu } = require('./helpers/mensajes');

require('colors');
let { showMenu } = require('./helpers/mensajes');

console.clear();

const main = async () => {
    console.log('Hola Mundo');
    showMenu();
}


main();