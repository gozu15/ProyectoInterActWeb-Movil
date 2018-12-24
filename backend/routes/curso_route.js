"use strict"
var express = require("express");
var cursocontroller = require("../controllers/curso_controller");
var multipart = require("connect-multiparty");
var api = express.Router();



//Rutas de usado en el HTTP para acceder a los metodos del controlador de producto
//llamar usando url/api/usuarios -- debuelve lista de usuarios
api.get("/",cursocontroller.Index);
//llamar usando url/api/usuarios/create usado apara crear usuarios
api.post("/",cursocontroller.Insert);
////llamar usando url/api/usuarios/createrol usado para crear roles
/*api.post("/createrol",usercontroller.createRol);
api.post("/filteruserbyname",usercontroller.FiltarUsuarioNombre);
api.post("/filteruserbyseconame",usercontroller.FiltarUsuarioApellido);
//llamar usando url/api/usuarios/updateuser/id -- para actualizar datos de un usuario
api.put("/updateuser/:id",fichero,usercontroller.updated);
///llamar usando url/api/usuarios/idusuario para sacar datos de un usuario en especifico
api.get("/:id",usercontroller.Buscar);
    //llamar usando url/api/usuarios/deleteuser/idusuario usado para borrar usuario
api.delete("/deleteuser/:id",usercontroller.DeleteUser);
api.get("/profile/:imagen",usercontroller.Imagen);
api.delete("/deleterol/:id",usercontroller.DeleteRol);
api.post("/login",usercontroller.Login)
api.get("/roles/getroles",usercontroller.GetRoles);*/
module.exports = api;