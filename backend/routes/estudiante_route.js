"use strict"
var express = require("express");
var estudiantecontroller = require("../controllers/estudiante_controller");
var multipart = require("connect-multiparty");
var api = express.Router();

api.get("/",estudiantecontroller.Index);
//llamar usando url/api/usuarios/create usado apara crear usuarios

module.exports = api;