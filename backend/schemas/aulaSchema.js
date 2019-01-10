"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var aulaSchema = Schema({
   nombre:String,
   materias: [{ type: Schema.Types.ObjectId, ref: 'materias' }],
   eliminado:{estado:Boolean,razon:String},
   creacion: {usuario:{type: Schema.ObjectId, ref: "Usuarios"},fecha:Date },
   modificacion:{fecha:Date,usuario:{ type: Schema.ObjectId, ref: "Usuarios" }}

})
module.exports = mongose.model("aulas", aulaSchema)