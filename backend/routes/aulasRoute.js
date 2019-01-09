"use strict"
var express = require("express");
var aulasController = require("../controllers/aulaController");
var api = express.Router();
api.post("/",aulasController.Registrar);

module.exports = api;