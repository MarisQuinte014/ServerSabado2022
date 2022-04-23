//Controlador
//1. Recibir petciones
//2. ejecutar BussinesLogic
//3. LLamar a la capa de servicios

import { request } from "express"

//4. Enviar las respuestas al cliente
export class HabitacionController {

    constructor(){}

    buscarTodas(resquest,response){

        let datos = [{ nombre: 'Juan', edad: 12 }, { nombre: 'Mariana',  edad: 19 }]

        try{
            response.status(200).json({
                mensaje: "Exito buscando los datos",
                data: datos,
                estado: true
            })

        }catch(ex){
            response.status(400).json({
                mensaje: "Error buscando los datos: " + ex,
                data: [],
                estado: false
            })
        }
    }

    buscarPorID(request,response){

        let datos = [{ nombre: 'Juan', edad: 12 }]
        let id = request.params.id
        console.log(id)

        try{
            response.status(200).json({
                mensaje: "Exito buscando el id: " + id,
                data: datos,
                estado: true
            })

        }catch(ex){
            response.status(400).json({
                mensaje: "Error buscando el id: " + ex,
                data: [],
                estado: false
            })
        }
    }

    registrar(resquest,response){}

    editar(resquest,response){}

    eliminar(resquest,response){}
}