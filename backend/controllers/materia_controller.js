var Sequelize = require('sequelize');
var Materia=require("../schemas/materia");

function Index(req,res){
    Materia.findAll().then(data => {
        res.status(200).send(data)
      })
}

function Insert(req,res){
    var params=req.body;
    console.log(params);

    var params=req.body;
         Materia.create({
            idMATERIA:null,
            nombre_materia: params.nombre,
            descripcion:params.descripcion,
            otros:params.otros,
     }).then(data => {
         res.status(200).send(data)
       });;
}
module.exports={Index,Insert}