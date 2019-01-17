"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var curso=require("./cursoSchema").schema;
var aulaSchema = Schema({
   colegio:{ type: Schema.Types.ObjectId, ref: 'colegios' },
   nombre:String,
   capacidad:String,
   descripcion:String,

   foto:{foto:String,tipo:String},
   cursos: [curso],
   eliminado:{estado:Boolean,razon:String},
   creacion: {usuario:{type: Schema.ObjectId, ref: "Usuarios"},fecha:Date },
   modificacion:{fecha:Date,usuario:{ type: Schema.ObjectId, ref: "Usuarios" }}

})
module.exports = mongose.model("aulas", aulaSchema)