//Importo las variables de entorno
// require('dotenv').config() --> Forma vieja de impotar
import 'dotenv/config' //Forma nueva de importar ES6 GLOBAL

//importo la clase servidor 
import {Servidor} from './Server/Servidor.js'

//Crear un objeto de la clase servidor 
let servidor = new Servidor()

//Despertar el servidor 
servidor.despertarServidor()


