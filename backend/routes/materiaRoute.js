"use strict"
var express = require("express");
var materiasController = require("../controllers/materiasController");
var api = express.Router();
api.post("/",materiasController.Registrar);
api.post("/buscar",materiasController.Buscar);
api.get("/",materiasController.GetMaterias);
api.get("/:id",materiasController.GetMateria);
api.put("/:id",materiasController.Actualizar);
api.delete("/:id",materiasController.Borrar);

module.exports = api;