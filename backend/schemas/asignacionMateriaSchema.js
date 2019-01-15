"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
 var curso=require("./cursoSchema").schema;
var asignacionMateriaSchema = Schema({
   colegio:{ type: Schema.Types.ObjectId, ref: 'colegios' },
   usuario:String,
   creacion: {usuario:{type: Schema.ObjectId, ref: "Usuarios"},fecha:Date },
   modificacion:{fecha:Date,usuario:{ type: Schema.ObjectId, ref: "Usuarios" }},
   gestion:String,
   curso:curso,
   //materias:[materias],

})
module.exports = mongose.model("asignacionmateria", asignacionMateriaSchema);