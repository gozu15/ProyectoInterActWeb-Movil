var Sequelize = require('sequelize');
var Aula=require("../schemas/aula");

function Index(req,res){
    Aula.findAll().then(aula => {
        res.status(200).send(aula)
      })
}

function Insert(req,res){
    var params=req.body;

    var params=req.body;
         Aula.create({
            idAULA:null,
            nombre_aula: params.nombre,
            descripcion:params.descripcion
     }).then(newAula => {
         res.status(200).send(newAula)
       });;
}
module.exports={Index,Insert}