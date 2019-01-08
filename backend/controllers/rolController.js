"use strict"
var Rol = require("../schemas/rolSchema");
//metodo para sacar todos los usuarios de la base de datos

function GetMarcas(req, res) {

    Usuario.find({}, function (error, lista) {
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
    var rol = new Rol();
    var params = req.body;
    rol.rol = params.rol;
    rol.nivel=params.nivel;
   
                //guarda al nuevo usuario en la bd
                rol.save((error, nuevoRol) => {
                    if (error) {
            
                        res.status(500).send({ mensaje: "error al guradar" })
                    } else {
                        res.status(200).send(nuevoRol)
                    }
                })
         
    
    //verifica que el usuario tenga el password

    //guarda al nuevo usuario en la bd
   
}


//metod para borrar un usuario


//exporta los metodos usados en otras partes
module.exports = { GetMarcas, Registrar}