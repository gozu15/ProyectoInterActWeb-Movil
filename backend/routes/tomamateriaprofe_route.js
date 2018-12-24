"use strict"
var express = require("express");
var tomacontroller = require("../controllers/tomamateria_controller");
var multipart = require("connect-multiparty");
var api = express.Router();

api.get("/",tomacontroller.tomamateriasProfesor);
api.post("/",tomacontroller.InsertTomaProfesro);

module.exports = api;