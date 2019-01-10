"use strict"
var Cursos = require("../schemas/cursoSchema");

function GetCursos(req, res) {

    Cursos.find({}, function (error, lista) {
        if (error) {
            res.status(500).send({ mensaje: "Error desconocido" })
        } else {
            if (!lista) {
                res.status(404).send({ mensaje: "no hay cursos registrados" })
            } else {


                res.status(200).send(lista)


            }
        }
    });
}
function Registrar(req, res) {
   
    var curso = new Cursos();
    var params = req.body;
    curso.nombre = params.nombre;
    curso.paralelo=params.paralelo;
    curso.materias=params.materias;
    curso.creacion=params.creacion;
    curso.modificacion=params.modificacion;
    curso.eliminado={estado:false}
             
                curso.save((error, nuevoCurso) => {
                    if (error) {
            
                        res.status(500).send({ mensaje: "error al guradar" })
                    } else {
                        res.status(200).send(nuevoCurso)
                    }
                })
         
    
    
}
function Getcurso(req,res){
    var id=req.params.id;
    Cursos.findById(id, function (error, lista) {
        if (error) {
            res.status(500).send({ mensaje: "Error desconocido" })
        } else {
            if (!lista) {
                res.status(404).send({ mensaje: "Error no se encontro el curso" })
            } else {


                res.status(200).send(lista)


            }
        }
    });
}
function Borrar(req,res){
     var datos={eliminado:{estado:true,razon:req.query.razon},modificacion:{fecha:"12-12-5",usuario:"5c34b3a83619a9178c5902f1"
    }}
   
    Cursos.findByIdAndUpdate(req.params.id,datos,{new: true}, function (error, lista) {
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

    Cursos.find({nombre: new RegExp(termino, 'i')}, function (error, lista) {
        if (error) {
            res.status(500).send({ mensaje: "Error al listar" })
        } else {
            if (!lista) {
                res.status(404).send({ mensaje: "Sin resultado" })
            } else {


                res.status(200).send(lista)


            }
        }
    });
}
function Actualizar(req,res){
    var curso = new Cursos();
    var params = req.body;
    curso._id=req.params.id;
    curso.nombre = params.nombre;
    curso.paralelo=params.paralelo;
    curso.materias=params.materias;
    curso.modificacion=params.modificacion;
          Cursos.findByIdAndUpdate(req.params.id,curso,{new: true}, function (error, lista) {
              if (error) {
                  res.status(500).send({ mensaje: "Error al listar" })
              } else {
                  if (!lista) {
                      res.status(404).send({ mensaje: "no se pudo actualizar" })
                  } else {
      
      
                      res.status(200).send(lista)
      
      
                  }
              }
          });
      
}


//exporta los metodos usados en otras partes
module.exports = { GetCursos, Registrar,Borrar,Actualizar,Getcurso,Buscar}