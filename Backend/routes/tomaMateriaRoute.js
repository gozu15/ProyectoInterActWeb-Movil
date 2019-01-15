"use strict"
var express = require("express");
var tomasController = require("../controllers/tomaMateriasController");
var api = express.Router();
api.post("/",tomasController.Registrar);
api.get("/:id",tomasController.GetToma);
api.delete("/:id",tomasController.QuitarMateria);
module.exports = api;