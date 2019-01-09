"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var asignacionMateriaSchema = Schema({
   fecha:Date,
   materias:[{ type: Schema.Types.ObjectId, ref: 'materias' }]

})
module.exports = mongose.model("asignacionmateria", asignacionMateriaSchema)