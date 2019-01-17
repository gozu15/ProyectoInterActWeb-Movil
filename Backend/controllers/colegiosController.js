"use strict"
var Colegio = require("../schemas/colegioSchema");
//metodo para sacar todos los usuarios de la base de datos
function GetColegio(req,res){
    var id=req.params.id;
    Colegio.findById(id, function (error, lista) {
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
function Registrar(req, res) {

    var colegio = new Colegio();
    var params = req.body;
    colegio.nombre = params.nombre;
    colegio.logo=params.logo;
    colegio.creacion=params.creacion;
   
   
     
                colegio.save((error, nuevoColegio) => {
                    if (error) {
            
                        res.status(500).send({ mensaje: "error al guradar" })
                    } else {
                        res.status(200).send(nuevoColegio)
                    }
                })   
}

module.exports = {Registrar,GetColegio}