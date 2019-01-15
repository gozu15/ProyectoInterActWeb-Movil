"use strict"
var Admins = require("../schemas/adminsSchema");
//metodo para sacar todos los usuarios de la base de datos
var bcript = require("bcrypt-nodejs");
var token =require("../token/token");
function GetUsuarios(req, res) {
   
    Admins.find({}, function (error, lista) {
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
//var colegio={colegio:"gatos",direccion:"cbba 344",otros:{otros},}

function Borrar(req,res){
  
    var datos={eliminado:{estado:true,razon:req.query.razon},modificacion:{fecha:"12-12-5",Admins:"5c34b3a83619a9178c5902f1"
    }}
   
    Admins.findByIdAndUpdate(req.params.id,datos,{new: true}, function (error, lista) {
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

    Admins.find({$or:[{nombre: new RegExp(termino, 'i')},{apellidos: new RegExp(termino, 'i')}]},{'perfil.foto':0,tutores:0}, function (error, lista) {
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
    var Admins = new Admins();
    var params = req.body;
    Admins._id=req.params.id;
    Admins.nombre = params.nombre;
    Admins.apellidos=params.apellidos;
    Admins.genero=params.genero;
    Admins.fechadenacimiento=params.fechadenacimiento;
    Admins.ci=params.ci;
    Admins.login=params.login;
    Admins.numero_contacto=params.numero_contacto;
    Admins.perfil=params.perfil;
    Admins.modificacion=params.modificacion;
//someString.replace(/cat/g, 'dog');
    var login={Admins:params.ci,password:params.nombre.charAt(0)+params.apellidos.charAt(0)+params.fechadenacimiento.replace(/-/g, '')}
        //Admins:carnet
    //pass:primer caracter nombre y apellido mas fecha nacmeinto
          Admins.findByIdAndUpdate(req.params.id,Admins,{new: true}, function (error, lista) {
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
    Admins.findById(id, function (error, lista) {
        if (error) {
            res.status(500).send({ mensaje: "Error" })
        } else {
            if (!lista) {
                res.status(404).send({ mensaje: "Admins no existe" })
            } else {


                res.status(200).send(lista)


            }
        }
    });
}

function Login(req,res){
    var params = req.body;
    var usuario = params.Admins;
    var pass = params.password;
    
    Admins.findOne({ 'login.usuario': usuario }, (error, user) => {
       
        if (error) {
            res.status(500).send({ mensaje: "Error al buscar Admins" })
        } else {
           
            if (user==null) {
                //alert("Admins o Contraseña incorrecta");
                res.status(404).send({ mensaje: "Admins no existe " })
            } else {
                // res.status(200).send({ user });
                if(user.login.estado!=true){
                    var admins=new Admins();
                    admins._id=user._id;
                    admins.login={usuario:user.login.usuario,password:user.login.password,estado:true}
                  
                     Admins.findByIdAndUpdate(user._id,admins,{new: true}, function (error, lista) {
                        
                
                                bcript.compare(pass, user.login.password, function(error, ok) {
                                    if (ok) {
                                      
                                            res.status(200).send({ token: token.crearToken(user), datos:user });
                                        
                                    }
                                    else{
                                        res.status(404).send({ mensaje: "Admins o contraseña incorrectas " })
                                    }
                                });
                     
                    });      
                }else{
                    res.status(401).send({ mensaje: "Admins activo actualmente" })
                }
            }
        }
    });
}

async function LogOut(req,res){

    var datos= await Admins.findById(req.params.id);
    var admins=new Admins();
                    admins._id=req.params.id;
                    admins.login={usuario:datos.login.usuario,password:datos.login.password,estado:false};
                  
                     admins.findByIdAndUpdate(req.params.id,admins,{new: true}, function (error, lista) {
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
   

    //console.log(req.body);
    var admins = new Admins();
    var params = req.body;
    admins.nombre = params.nombre;
    admins.apellidos=params.apellidos;
    admins.genero=params.genero;
    admins.ci=params.ci;
    admins.numero_contacto=params.numero_contacto;
    admins.perfil=params.perfil;
    admins.fechadenacimiento=params.fechadenacimiento;
    admins.creacion=params.creacion;
    admins.modificacion=params.modificacion;
    admins.eliminado={estado:false}
    var fecha = new Date(admins.fechadenacimiento).toJSON().slice(0,10).replace(/-/g,'');

    var login={usuario:params.ci,password:params.nombre.charAt(0)+params.apellidos.charAt(0)+fecha,estado:false}
    
   // console.log(Admins.rol);
    if (params.ci) {
        //encripta el pasword del Admins
        bcript.hash(login.password, null, null, function(error, hash) {
            login.password=hash;
            admins.login=login
            if (login.usuario != null) {
                //guarda al nuevo Admins en la bd
            
                admins.save((error, nuevoUsuario) => {
                    if (error) {
            
                        res.status(500).send({ mensaje: "error al guradar" })
                    } else {
                    
                        res.status(200).send(nuevoUsuario)
                    }
                })
            }
      });
    } 
   
}


module.exports = { Actualizar,GetUsuarios, Registrar,GetUsuario,Login,Borrar,Buscar,LogOut}