"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var RolSchema = Schema({
   rol:String,
   nivel:String,

})
module.exports = mongose.model("roles", RolSchema)