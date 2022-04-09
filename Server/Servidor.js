// const express = require('express') Importo el FRAMEWORK EXPRESS manera vieja
//Importo el FRAMEWORK EXPRESS manera actualizada
import express from 'express' // express para el servidor

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
        this.app.get('/api/v1/sabado', function (req, res) {
            res.send('Hi, i am a GET')
        })

        this.app.get('/api/v1/sabado/:id', function (req, res) {
            res.send('Hi, i am a GET')
        })

        this.app.post('/api/v1/sabado', function (req, res) {
            res.send('Hi, i am a POST')
        })

        this.app.put('/api/v1/sabado', function (req, res) {
            res.send('Hi, i am a PUT')
        })

        this.app.delete('/api/v1/sabado', function (req, res) {
            res.send('Hi, i am a DELETE')
        })
    }
}