"use strict"
var express = require("express");
var registrocontroller = require("../controllers/registro_controller");
var multipart = require("connect-multiparty");
var api = express.Router();



api.get("/",registrocontroller.Index);

api.post("/",registrocontroller.Insert);

module.exports = api;