"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var rolSchema=require("./rolSchema").schema;
var UsuariosSchema = Schema({
    colegio:{ type: Schema.Types.ObjectId, ref: 'colegios' },
    nombre:String,
    apellidos:String,
    genero:String,
    fechadenacimiento:String,
    ci:String,
    login:{usuario:String,password:String,estado:Boolean},
    numero_contacto:String,
    perfil:{foto:String,tipo:String,miniatura:String},
    tutores:[String],
    rol:rolSchema,
    eliminado:{estado:Boolean,razon:String},
    creacion: {usuario:{type: Schema.ObjectId, ref: "Usuarios"},fecha:Date },
    modificacion:{fecha:Date,usuario:{ type: Schema.ObjectId, ref: "Usuarios" }}


})
module.exports = mongose.model("Usuarios", UsuariosSchema)