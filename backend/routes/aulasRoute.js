"use strict"
var express = require("express");
var aulasController = require("../controllers/aulaController");
var api = express.Router();
api.post("/",aulasController.Registrar);
api.post("/buscar",aulasController.Buscar);
api.get("/",aulasController.GetAulas);
api.get("/:id",aulasController.GetAula);
api.delete("/",aulasController.Borrar);
api.put("/",aulasController.Actualizar);


module.exports = api;