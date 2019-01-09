"use strict"
var Aula = require("../schemas/aulaSchema");
//metodo para sacar todos los usuarios de la base de datos

function GetAulas(req, res) {

    Aula.find({}, function (error, lista) {
        if (error) {
            res.status(500).send({ mensaje: "Error al listar" })
        } else {
            if (!lista) {
                res.status(404).send({ mensaje: "Error al listar" })
            } else {


                res.status(200).send(lista)


            }
        }
    });
}
function Registrar(req, res) {
    // console.log(req.body,req.files.perfil);

    //console.log(req.body);
    var aula = new Aula();
    var params = req.body;
    aula.nombre = params.nombre;
    aula.materias=params.materias;
   
                //guarda al nuevo usuario en la bd
                aula.save((error, nuevaAula) => {
                    if (error) {
            
                        res.status(500).send({ mensaje: "error al guradar" })
                    } else {
                        res.status(200).send(nuevaAula)
                    }
                })
         
    
    //verifica que el usuario tenga el password

    //guarda al nuevo usuario en la bd
   
}


//metod para borrar un usuario


//exporta los metodos usados en otras partes
module.exports = { GetAulas, Registrar}