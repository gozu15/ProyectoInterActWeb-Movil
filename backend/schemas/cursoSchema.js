"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var cursoSchema = Schema({
   colegio:{ type: Schema.Types.ObjectId, ref: 'colegios' },
   nombre:String,
   paralelo:String,
   materias: [{ type: Schema.Types.ObjectId, ref: 'materias' }],
   eliminado:{estado:Boolean,razon:String},
   creacion: {usuario:{type: Schema.ObjectId, ref: "Usuarios"},fecha:Date },
   modificacion:{fecha:Date,usuario:{ type: Schema.ObjectId, ref: "Usuarios" }}


})
module.exports = mongose.model("cursos", cursoSchema)
/* Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  });*/