"use strict"
var express = require("express");
var AdminsController = require("../controllers/adminsController");
var api = express.Router();
api.post("/",AdminsController.Registrar);
api.post("/buscar",AdminsController.Buscar);
api.get("/",AdminsController.GetUsuarios);
api.get("/:id",AdminsController.GetUsuario);
api.delete("/",AdminsController.Borrar);
api.put("/",AdminsController.Actualizar);


module.exports = api;