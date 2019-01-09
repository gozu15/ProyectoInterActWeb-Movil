"use strict"
var express = require("express");
var cursosController = require("../controllers/cursosController");
var api = express.Router();
api.post("/",cursosController.Registrar);

module.exports = api;