"use strict"
var TomaMateria = require("../schemas/asignacionMateriaSchema");
var Curso=require("../schemas/cursoSchema");
//metodo para sacar todos los usuarios de la base de datos

/* function GetTomas(req, res) {

  TomaMateria.find({}, function (error, lista) {
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
}*/
function GetToma(req,res){
    var id=req.params.id;
  TomaMateria.findOne({usuario:id}).populate('curso.materias').
  exec(function  (error, lista) {
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
/*function Borrar(req,res){
     var datos={eliminado:{estado:true,razon:req.query.razon},modificacion:{fecha:"12-12-5",usuario:"5c34b3a83619a9178c5902f1"
    }}
   
  TomaMateria.findByIdAndUpdate(req.params.id,datos,{new: true}, function (error, lista) {
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
}*/
/* function Buscar(req,res){
    var termino=req.body.termino;

  TomaMateria.find({nombre: new RegExp(termino, 'i')}, function (error, lista) {
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
}*/

async function QuitarMateria(req,res){
    var id=req.params.id;
    var toma = new TomaMateria();
    var params = req.body;
    toma._id=req.params.id;
    toma.modificacion=req.query.modificacion;
    console.log(req.query);
  var de=  await TomaMateria.findByIdAndUpdate(id,{curso: {$pull :{materias : [req.query.idmateria]}}},{new: true});
  console.log(id);
    TomaMateria.findByIdAndUpdate(req.params.id,{modificacion:toma.modificacion},{new: true}, function (error, lista) {
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
function Actualizar(req,res){
    var materia = new Materia();
    var params = req.body;
    materia._id=req.params.id;
    materia.nombre=params.nombre;
    materia.descripcion=params.descripcion;
    materia.modificacion=params.modificacion;
        TomaMateria.findByIdAndUpdate(req.params.id,materia,{new: true}, function (error, lista) {
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
 async function Registrar(req, res) {

    var params = req.body;
    var curso=await Curso.findById(params.idcurso);
    var toma = new TomaMateria();
    var params = req.body;
    toma.colegio=params.colegio;
    toma.usuario = params.usuario;
  
    toma.creacion=params.creacion;
    toma.modificacion=params.modificacion;  
    toma.gestion=params.gestion;
    toma.curso=curso;
                toma.save((error, nuevoToma) => {
                    if (error) {
            
                        res.status(500).send({ mensaje: "error al guradar" })
                    } else {
                        res.status(200).send(nuevoToma)
                    }
                })
         

}



module.exports = {Registrar,GetToma,QuitarMateria}