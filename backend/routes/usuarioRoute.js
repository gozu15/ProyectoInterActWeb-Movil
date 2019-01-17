"use strict"
var express = require("express");
var usuariosController = require("../controllers/usuariosController");
var api = express.Router();
var md_aut = require("../token/aut.js");
//Rutas de usado en el HTTP para acceder a los metodos del controlador de producto
//llamar usando url/api/productos -- debuelve lista de producto
api.post("/",md_aut.autentication,usuariosController.Registrar);
api.post("/buscar",usuariosController.Buscar);
api.get("/",md_aut.autentication,usuariosController.GetUsuarios)
api.get("/:id",usuariosController.GetUsuario);
api.delete("/:id",md_aut.autentication,usuariosController.Borrar);
api.put("/:id",md_aut.autentication,usuariosController.Actualizar);
/*api.get("/:id",md_aut.autentication,ventasController.getVenta);
api.post("/",md_aut.autentication,ventasController.addVentas);
api.put("/:id",md_aut.autentication,ventasController.updated);
api.delete("/",md_aut.autentication,ventasController.deleteVenta);
api.post("/buscar",md_aut.autentication,ventasController.FiltrarNombre);*/
//llamar usando url/api/productos/create para crear los producto, recibe datos enviados por forms data

module.exports = api;