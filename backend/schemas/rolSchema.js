"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var RolSchema = Schema({
   colegio:{ type: Schema.Types.ObjectId, ref: 'colegios' },
   rol:String,
   nivel:String,

})
module.exports = mongose.model("roles", RolSchema)