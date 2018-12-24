"use strict"
var express = require("express");
var gestioncontroller = require("../controllers/gestion_controller");
var multipart = require("connect-multiparty");
var api = express.Router();

api.get("/",gestioncontroller.Index);
api.post("/",gestioncontroller.Insert);

module.exports = api;