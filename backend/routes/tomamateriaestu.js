"use strict"
var express = require("express");
var tomacontroller = require("../controllers/tomamateria_controller");
var multipart = require("connect-multiparty");
var api = express.Router();

api.get("/",tomacontroller.tomaEstudiante);
api.post("/",tomacontroller.InsertTomaEstudiante);

module.exports = api;