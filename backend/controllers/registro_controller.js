var Sequelize = require('sequelize');
var Registro=require("../schemas/registro");

function Index(req,res){
    Registro.findAll().then(data => {
        res.status(200).send(data)
      })
}

function Insert(req,res){
   
       var params=req.body;
            Registro.create({
            idREGISTRO:null,
            fecha_registro: new Date,
            categoria_estudio:params.categoria_estudio,
            turno_estudio: params.turno_estudio,
            descripcion:params.descripcion,
            USUARIO_idUSUARIO: params.idusuario,
          
        }).then(data => {
            res.status(200).send(data)
          });;
}
module.exports={Index,Insert}