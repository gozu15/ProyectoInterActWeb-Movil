"use strict"
var express = require("express");
var rolsController = require("../controllers/rolController");
var api = express.Router();
api.post("/",rolsController.Registrar);
api.get("/",rolsController.GetRoles);
module.exports = api;
/*
var forma1:={colegios:{
    materias:[materia],
    curso:[crusos],
    usuario:[usuario]
}
var formA2:{colegio:{nombre,otros,}}
 curso:{idcolegio}
 materias:{idcolegio},
 usuario:{idcolegio}
}*/