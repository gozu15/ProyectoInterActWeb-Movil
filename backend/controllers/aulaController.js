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
function GetAula(req,res){
    var id=req.params.id;
    Aula.findById(id, function (error, lista) {
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
function Actualizar(req,res){
    //console.log(req.body);
var aula = new Aula();
var params = req.body;
aula._id=req.params.id;
aula.nombre=params.nombre;
aula.foto=params.foto;
aula.capacidad=params.capacidad;
aula.materias=params.materias;
aula.descripcion=params.descripcion;
aula.modificacion=params.modificacion;
     Aula.findByIdAndUpdate(req.params.id,materia,{new: true}, function (error, lista) {
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
function Borrar(req,res){
    var datos={eliminado:{estado:true,razon:req.query.razon},modificacion:{fecha:"12-12-5",usuario:"5c34b3a83619a9178c5902f1"
   }}
  
   Aula.findByIdAndUpdate(req.params.id,datos,{new: true}, function (error, lista) {
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

   Aula.find({nombre: new RegExp(termino, 'i')}, function (error, lista) {
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
function Registrar(req, res) {
  
    var aula = new Aula();
    var params = req.body;
    aula.colegio=params.colegio;
    aula.nombre = params.nombre;
    aula.materias=params.materias;
    aula.creacion=params.creacion;
    aula.modificacion=params.modificacion;
    aula.eliminado={estado:false};
    aula.descripcion=params.descripcion;
    aula.foto=params.foto;
    aula.capacidad=params.capacidad;
               
                aula.save((error, nuevaAula) => {
                    if (error) {
            
                        res.status(500).send({ mensaje: "error al guradar" })
                    } else {
                        res.status(200).send(nuevaAula)
                    }
                })
         
    
    
   
}



module.exports = { GetAulas, Registrar,Actualizar,Borrar,Buscar,GetAula}