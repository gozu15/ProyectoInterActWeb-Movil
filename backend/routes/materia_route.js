"use strict"
var express = require("express");
var materiacontroller = require("../controllers/materia_controller");
var multipart = require("connect-multiparty");
var api = express.Router();



api.get("/",materiacontroller.Index);

api.post("/",materiacontroller.Insert);

module.exports = api;