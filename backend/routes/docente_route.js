"use strict"
var express = require("express");
var docentecontroller = require("../controllers/docente_controller");
var api = express.Router();

api.get("/",docentecontroller.Index);
//llamar usando url/api/usuarios/create usado apara crear usuarios

module.exports = api;