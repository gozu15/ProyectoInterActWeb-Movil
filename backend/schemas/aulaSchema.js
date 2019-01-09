"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var aulaSchema = Schema({
   nombre:String,
   materias: [{ type: Schema.Types.ObjectId, ref: 'materias' }]

})
module.exports = mongose.model("aulas", aulaSchema)