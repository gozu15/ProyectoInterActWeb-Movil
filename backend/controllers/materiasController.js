"use strict"
var Materia = require("../schemas/materiaSchema");
//metodo para sacar todos los usuarios de la base de datos

function GetMaterias(req, res) {

    Materia.find({}, function (error, lista) {
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
function GetMateria(req,res){
    var id=req.params.id;
    Materia.findById(id, function (error, lista) {
        if (error) {
            res.status(500).send({ mensaje: "Error desconocido" })
        } else {
            if (!lista) {
                res.status(404).send({ mensaje: "Error no se encontro la materia" })
            } else {


                res.status(200).send(lista)


            }
        }
    });
}
function Borrar(req,res){
     var datos={eliminado:true}
   
    Materia.findByIdAndUpdate(req.params.id,datos,{new: true}, function (error, lista) {
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
function Buscar(req,res){
    var termino=req.body.termino;

    Materia.find({nombre: new RegExp(termino, 'i')}, function (error, lista) {
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
function Actualizar(req,res){
         //console.log(req.body);
    var materia = new Materia();
    var params = req.body;
    materia._id=req.params.id;
    materia.nombre=params.nombre;
    materia.descripcion=params.descripcion;

          Materia.findByIdAndUpdate(req.params.id,materia,{new: true}, function (error, lista) {
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
    var materia = new Materia();
    var params = req.body;
    materia.nombre = params.nombre;
    materia.descripcion=params.descripcion;
   
                //guarda al nuevo usuario en la bd
                materia.save((error, nuevaMateria) => {
                    if (error) {
            
                        res.status(500).send({ mensaje: "error al guradar" })
                    } else {
                        res.status(200).send(nuevaMateria)
                    }
                })
         
    
    //verifica que el usuario tenga el password

    //guarda al nuevo usuario en la bd
   
}


//metod para borrar un usuario


//exporta los metodos usados en otras partes
module.exports = { GetMaterias, Registrar,Actualizar,Borrar,GetMateria,Buscar}