"use strict"
var Usuario = require("../schemas/usuariosSchema");
//metodo para sacar todos los usuarios de la base de datos
var Rol = require("../schemas/rolSchema");
var bcript = require("bcrypt-nodejs");
var token =require("../token/token");
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
function GetTotal(req, res) {
    //linea para consultar a la base de datos

    Usuario.find().paginate(page, 4, function (error, lista, total) {
        if (error) {
            res.status(500).send({ mensaje: "Error al listar" })
        } else {

            //linea para unir productos y tipos de productos


            res.status(200).send(total)
        }




    });
}


function Login(req,res){
   
    var params = req.body;
    var usuario = params.usuario;
    var pass = params.password;
    
    Usuario.findOne({ 'login.usuario': usuario }, (error, user) => {
       
        if (error) {
            res.status(500).send({ mensaje: "Error al buscar usuario" })
        } else {
           
            if (user==null) {
                //alert("Usuario o Contraseña incorrecta");
                res.status(404).send({ mensaje: "usuario no existe " })
            } else {
                // res.status(200).send({ user });
                bcript.compare(pass, user.login.password, function(error, ok) {
                    if (ok) {
                      
                            res.status(200).send({ token: token.crearToken(user), datos:user });
                        
                    }
                    else{
                        res.status(404).send({ mensaje: "usuario o contraseña incorrectas " })
                    }
                });
            }
        }
    });
}
async function Registrar(req, res) {
    // console.log(req.body,req.files.perfil);

    //console.log(req.body);
    var usuario = new Usuario();
    var params = req.body;
    usuario.nombre = params.nombre;
    usuario.apellidos=params.apellidos;
    usuario.genero=params.genero;
    usuario.fechadenacimiento=params.fechadenacimiento;
    usuario.ci=params.ci;
    usuario.login=params.login;
    usuario.numero_contacto=params.numero_contacto;
    usuario.perfil=params.perfil;
    usuario.rol=await Rol.findById(params.rol) ; 
   // console.log(usuario.rol);
    if (params.login.password) {
        //encripta el pasword del usuario
        bcript.hash(params.login.password, null, null, function(error, hash) {
            usuario.login.password = hash;
            if (usuario.login.usuario != null) {
                //guarda al nuevo usuario en la bd
                usuario.save((error, nuevoUsuario) => {
                    if (error) {
            
                        res.status(500).send({ mensaje: "error al guradar" })
                    } else {
                        res.status(200).send(nuevoUsuario)
                    }
                })
            }

        });
    } 
    //verifica que el usuario tenga el password

    //guarda al nuevo usuario en la bd
   
}


//metod para borrar un usuario


//exporta los metodos usados en otras partes
module.exports = { GetMarcas, Registrar,GetTotal,Login}