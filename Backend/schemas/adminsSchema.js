"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var UsuariosSchema = Schema({
    nombre:String,
    apellidos:String,
    genero:String,
    ci:String,
    login:{usuario:String,password:String,estado:Boolean},
    numero_contacto:String,
    perfil:{foto:String,tipo:String,miniatura:String},
    eliminado:{estado:Boolean,razon:String},
    creacion: {usuario:{type: Schema.ObjectId, ref: "admins"},fecha:Date },
    modificacion:{fecha:Date,usuario:{ type: Schema.ObjectId, ref: "admins" }}


})
module.exports = mongose.model("admins", UsuariosSchema)