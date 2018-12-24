"use strict"

var Sequelize = require('sequelize');
var Curso=require("../schemas/curso");
var sequelize =require("../database/mysqlconfig");
function Index(req,res){
    sequelize.query("SELECT usuario.idUSUARIO AS id,usuario.tipo_usuario, usuario.nombre,usuario.apellidos_usuario,usuario.genero,registro.fecha_registro,registro.categoria_estudio,registro.turno_estudio,registro.descripcion FROM usuario,registro WHERE usuario.tipo_usuario='Estudiante' AND usuario.idUSUARIO=registro.idREGISTRO",{ type: Sequelize.QueryTypes.SELECT}).then(myTableRows => {
        console.log(myTableRows);
        res.status(200).send(myTableRows)
      })
}


module.exports={Index}


//SELECT usuario.idUSUARIO, usuario.nombre,usuario.apellidos_usuario,usuario.genero,registro.fecha_registro,registro.categoria_estudio,registro.turno_estudio,registro.descripcion FROM usuario,registro WHERE usuario.idUSUARIO=registro.idREGISTRO