"use strict"
var express = require("express");
var cursosController = require("../controllers/cursosController");
var api = express.Router();

api.post("/",cursosController.Registrar);
api.get("/",cursosController.GetCursos);
api.get("/:id",cursosController.Getcurso);
api.put("/",cursosController.Actualizar);
api.delete("/",cursosController.Borrar);
api.post("/buscar",cursosController.Buscar);
module.exports = api;