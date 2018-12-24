var Sequelize = require('sequelize');
var Usuario=require("../schemas/usuario");

function Index(req,res){
    Usuario.findAll().then(user => {
        res.status(200).send(user)
      })
}

function Insert(req,res){
   
       var params=req.body;
            Usuario.create({
            idUSUARIO:null,
            nombre: params.nombre,
            apellidos_usuario:params.apellidos,
            genero: params.genero,
            fecha_nacimiento:new Date,
            tipo_usuario: params.tipo,
            nombre_usuario:params.nombre_usuario,
            password:params.password
        }).then(newUser => {
            res.status(200).send(newUser)
          });;
}
module.exports={Index,Insert}