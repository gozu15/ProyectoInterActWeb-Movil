"use strict"
var express = require("express");
var horariocontroller = require("../controllers/horario_controller");
var multipart = require("connect-multiparty");
var api = express.Router();

api.get("/",horariocontroller.Index);
//llamar usando url/api/usuarios/create usado apara crear usuarios
api.post("/",horariocontroller.Insert);

module.exports = api;