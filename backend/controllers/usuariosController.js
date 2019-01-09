"use strict"
var Usuario = require("../schemas/usuariosSchema");
//metodo para sacar todos los usuarios de la base de datos
var Rol = require("../schemas/rolSchema");
var bcript = require("bcrypt-nodejs");
var token =require("../token/token");
function GetUsuarios(req, res) {

    Usuario.find({},{'perfil.foto':0,tutores:0}, function (error, lista) {
        if (error) {
            res.status(500).send({ mensaje: "Error al listar" })
        } else {
            if (!lista) {
                res.status(404).send({ mensaje: "no ay usuarios" })
            } else {


                res.status(200).send(lista)


            }
        }
    });
}

function Borrar(req,res){
  
  var datos={eliminado:true,razoneliminacion:req.query.razon,modificacion:{fecha:"12-12-5",usuario:"5c34b3a83619a9178c5902f1"}}
   
    Usuario.findByIdAndUpdate(req.params.id,datos,{new: true}, function (error, lista) {
        if (error) {
            res.status(500).send({ mensaje: "Error " })
        } else {
            if (!lista) {
                res.status(404).send({ mensaje: "Error no de pudo borrar" })
            } else {


                res.status(200).send(lista)


            }
        }
    });
}
function Buscar(req,res){
    var termino=req.body.termino;

    Usuario.find({$or:[{nombre: new RegExp(termino, 'i')},{apellidos: new RegExp(termino, 'i')}]},{'perfil.foto':0,tutores:0}, function (error, lista) {
        if (error) {
            res.status(500).send({ mensaje: "Error al listar" })
        } else {
            if (!lista) {
                res.status(404).send({ mensaje: "Sin resultados" })
            } else {


                res.status(200).send(lista)


            }
        }
    });
}
function Actualizar(req,res){
       //console.log(req.body);
    var usuario = new Usuario();
    var params = req.body;
    usuario._id=req.params.id;
    usuario.nombre = params.nombre;
    usuario.apellidos=params.apellidos;
    usuario.genero=params.genero;
    usuario.fechadenacimiento=params.fechadenacimiento;
    usuario.ci=params.ci;
    usuario.login=params.login;
    usuario.numero_contacto=params.numero_contacto;
    usuario.perfil=params.perfil;
    usuario.creacion=params.creacion;
    usuario.modificacion=params.modificacion;
          Usuario.findByIdAndUpdate(req.params.id,usuario,{new: true}, function (error, lista) {
              if (error) {
                  res.status(500).send({ mensaje: "Error desconocido" })
              } else {
                  if (!lista) {
                      res.status(404).send({ mensaje: "Error no se pudo actualizar" })
                  } else {
      
      
                      res.status(200).send(lista)
      
      
                  }
              }
          });
      
}
function GetUsuario(req,res){
    var id=req.params.id;
    Usuario.findById(id, function (error, lista) {
        if (error) {
            res.status(500).send({ mensaje: "Error" })
        } else {
            if (!lista) {
                res.status(404).send({ mensaje: "usuario no existe" })
            } else {


                res.status(200).send(lista)


            }
        }
    });
}

function Login(req,res){
    var params = req.body;
    var usuario = params.usuario;
    var pass = params.password;
    
    Usuario.findOne({ 'login.usuario': usuario },{perfil:0,tutores:0}, (error, user) => {
       
        if (error) {
            res.status(500).send({ mensaje: "Error al buscar usuario" })
        } else {
           
            if (user==null) {
                //alert("Usuario o Contraseña incorrecta");
                res.status(404).send({ mensaje: "usuario no existe " })
            } else {
                // res.status(200).send({ user });
                if(user.login.estado!=true){
                    var usuario=new Usuario();
                    usuario._id=user._id;
                    usuario.login={usuario:user.login.usuario,password:user.login.password,estado:true}
                  
                     Usuario.findByIdAndUpdate(user._id,usuario,{new: true}, function (error, lista) {
                        
                
                                bcript.compare(pass, user.login.password, function(error, ok) {
                                    if (ok) {
                                      
                                            res.status(200).send({ token: token.crearToken(user), datos:user });
                                        
                                    }
                                    else{
                                        res.status(404).send({ mensaje: "usuario o contraseña incorrectas " })
                                    }
                                });
                     
                    });      
                }else{
                    res.status(401).send({ mensaje: "Usuario activo actualmente" })
                }
            }
        }
    });
}

async function LogOut(req,res){

    var datos= await Usuario.findById(req.params.id);
    var usuario=new Usuario();
                    usuario._id=req.params.id;
                    usuario.login={usuario:datos.login.usuario,password:datos.login.password,estado:false};
                  
                     Usuario.findByIdAndUpdate(req.params.id,usuario,{new: true}, function (error, lista) {
                         console.log(lista);
                        if (error) {
                            res.status(500).send({ mensaje: "Error desconocido" })
                        } else {
                            if (!lista) {
                                res.status(404).send({ mensaje: "Error no se  pudo cerrar secion" })
                            } else {
                                res.status(200).send(true)
                            }
                        }
                    });     
}
async function Registrar(req, res) {
    // console.log(req.body,req.files.perfil);
    console.log(req.body);

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
    usuario.rol=await Rol.findById(params.rol);
    usuario.creacion=params.creacion;
    usuario.modificacion=params.modificacion;
    usuario.eliminado=false;
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
module.exports = { Actualizar,GetUsuarios, Registrar,GetUsuario,Login,Borrar,Buscar,LogOut}