var Sequelize = require('sequelize');
var Horario=require("../schemas/horario");

function Index(req,res){
    Horario.findAll().then(horario => {
        res.status(200).send(horario)
      })
}

function Insert(req,res){
    var params=req.body;
    console.log(params);

    var params=req.body;
    Horario.create({
        idHORARIOS:null,
        hora_entrada: params.hora_entrada,
        hora_salida:params.hora_salida,
        HORARIOScol:params.horario,
     }).then(newhorario => {
         res.status(200).send(newhorario)
       });;
}
module.exports={Index,Insert}