"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var MateriaSchema = Schema({
   nombre:String,
   descripcion:String,
   eliminado:Boolean

})
module.exports = mongose.model("materias", MateriaSchema)