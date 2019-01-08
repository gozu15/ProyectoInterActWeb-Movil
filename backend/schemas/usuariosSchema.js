"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var rolSchema=require("./rolSchema").schema;
var UsuariosSchema = Schema({
    nombre:String,
    apellidos:String,
    genero:String,
    fechadenacimiento:String,
    ci:String,
    login:{usuario:String,password:String},
    numero_contacto:String,
    perfil:{foto:String,tipo:String},
    tutores:[String],
    rol:rolSchema
})
module.exports = mongose.model("Usuarios", UsuariosSchema)