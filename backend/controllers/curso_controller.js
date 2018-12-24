var Sequelize = require('sequelize');
var Curso=require("../schemas/curso");

function Index(req,res){
    Curso.findAll().then(curso => {
        res.status(200).send(curso)
      })
}

function Insert(req,res){
    var params=req.body;
    console.log(params);

    var params=req.body;
         Curso.create({
            idCURSO:null,
            nombre_curso: params.nombre,
            AULA_idAULA:params.idaula,
            paralelo:params.paralelo,
     }).then(newAula => {
         res.status(200).send(newAula)
       });;
}
module.exports={Index,Insert}