"use strict"
var express = require("express");
var bodypaserser = require("body-parser");
var app = express();
app.use(bodypaserser.urlencoded({ extended: false }));
app.use(bodypaserser.json());
// middleware para permitir o denegar acceso a pagias usar la API

app.use(function (req, res, next) {

    // Sitio web que desea permitir que se conecte
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

   // res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");

    //Solicite los métodos que desea permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Solicitar encabezados que desees permitir
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pase a la siguiente capa de middleware
    next();
});
//Rutas de Acceso a los controladores

var userroute=require("./routes/usuario_route");
app.use("/api/usuarios",userroute);

var aularoute=require("./routes/aula_route");
app.use("/api/aulas",aularoute);

var cursoroute=require("./routes/curso_route");
app.use("/api/cursos",cursoroute);


var gestionroute=require("./routes/gestion_route");
app.use("/api/gestion",gestionroute);


var horarioroute=require("./routes/horario_route");
app.use("/api/horario",horarioroute);

app.use("/api/materia",require("./routes/materia_route"));

module.exports = app;