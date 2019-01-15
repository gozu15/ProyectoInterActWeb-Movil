"use strict"
var mongose = require("mongoose");

var Schema = mongose.Schema;
var colegioSchema = Schema({
   nombre:String,
   logo:String,
   creacion: {usuario:{type: Schema.ObjectId, ref: "admins"},fecha:Date },
   
})
module.exports = mongose.model("colegios", colegioSchema)
/* Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  });*/