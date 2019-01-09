"use strict"
var mongose = require("mongoose");
var Schema = mongose.Schema;
var cursoSchema = Schema({
   nombre:String,
   paralelo:String,
   materias: [{ type: Schema.Types.ObjectId, ref: 'materias' }]
   

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