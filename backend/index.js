"use strict"
var mongoose = require("mongoose");
var app = require("./app");
var port = process.env.port || 3000;

//mongodb://root:toor123@ds027308.mlab.com:27308/colegiodb
//conexion ala bd de mongo, en este caso alojado en mlab.com
mongoose.connect('mongodb://root:toor123@ds027308.mlab.com:27308/colegiodb',{ useNewUrlParser: true },(error, respuesta) => {
 //   mongoose.connect('mongodb://127.0.0.1:27017/Node', (error, respuesta) => {
        if (error) {
            throw error;
        } else {
            console.log("correcta");
            //lanzar el servior
            app.listen(port, function() {
                console.log("servidor del api rest en puerto 3000");
            })
        }
    });