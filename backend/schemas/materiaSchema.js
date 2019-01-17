"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var MateriaSchema = Schema({
   colegio:{ type: Schema.Types.ObjectId, ref: 'colegios' },
   nombre:String,
   descripcion:String,
   eliminado:{estado:Boolean,razon:String},
   capicidad:Number,
   creacion: {usuario:{type: Schema.ObjectId, ref: "Usuarios"},fecha:Date },
   modificacion:{fecha:Date,usuario:{ type: Schema.ObjectId, ref: "Usuarios" }}
})
module.exports = mongose.model("materias", MateriaSchema)