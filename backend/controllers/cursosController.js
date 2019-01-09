"use strict"
var Cursos = require("../schemas/cursoSchema");
//metodo para sacar todos los usuarios de la base de datos

function GetCursos(req, res) {

    Cursos.find({}, function (error, lista) {
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
    var curso = new Cursos();
    var params = req.body;
    curso.nombre = params.nombre;
    curso.paralelo=params.paralelo;
    curso.materias=params.materias;
   
                //guarda al nuevo usuario en la bd
                curso.save((error, nuevoCurso) => {
                    if (error) {
            
                        res.status(500).send({ mensaje: "error al guradar" })
                    } else {
                        res.status(200).send(nuevoCurso)
                    }
                })
         
    
    //verifica que el usuario tenga el password

    //guarda al nuevo usuario en la bd
   
}


//metod para borrar un usuario


//exporta los metodos usados en otras partes
module.exports = { GetCursos, Registrar}