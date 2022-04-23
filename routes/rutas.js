import express from 'express' 

//Importo el controlador de Habitaciones
import {HabitacionController} from '../Controllers/HabitacionController.js'

//creo un objeto de la clase controlar habitacion
let habitacionController = new HabitacionController()

//Utilizo el metodo Route() de express 
export let rutas = express.Router()

//listas de servicios que ofrece el api 
rutas.get('/api/v1/sabado', habitacionController.buscarTodas)

rutas.get('/api/v1/sabado/:id', habitacionController.buscarPorID)

rutas.post('/api/v1/sabado', function (req, res) {
    res.send('Hi, i am a POST')
})

rutas.put('/api/v1/sabado', function (req, res) {
    res.send('Hi, i am a PUT')
})

rutas.delete('/api/v1/sabado', function (req, res) {
    res.send('Hi, i am a DELETE')
})