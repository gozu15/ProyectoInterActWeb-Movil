var Sequelize = require('sequelize');
var Gestion=require("../schemas/gestion");

function Index(req,res){
    Gestion.findAll().then(gestion => {
        res.status(200).send(gestion)
      })
}

function Insert(req,res){
    var params=req.body;

    var params=req.body;
         Gestion.create({
            idGESTION:null,
            number_year: new Date,
            nro_gestion:params.gestion,
     }).then(newGestion => {
         res.status(200).send(newGestion)
       });;
}
module.exports={Index,Insert}