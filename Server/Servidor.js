// const express = require('express') Importo el FRAMEWORK EXPRESS manera vieja
//Importo el FRAMEWORK EXPRESS manera actualizada
import express from 'express' // express para el servidor

//importo las rutas de la api 
import {rutas} from '../routes/rutas.js'

export class Servidor{

    constructor(){
        this.app = express() //atributo app (Guarda a Express)
        this.atenderPeticiones() //atiende las peticiones, cuando se prenda el servidor
    }

    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendido en el puerto ${process.env.PORT}`)
        })
    }

    atenderPeticiones(){
       //llamando al archivo de rutas 
       this.app.use('/',rutas)
    }
}