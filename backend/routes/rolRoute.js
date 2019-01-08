"use strict"
var express = require("express");
var rolsController = require("../controllers/rolController");
var api = express.Router();
api.post("/",rolsController.Registrar);

module.exports = api;