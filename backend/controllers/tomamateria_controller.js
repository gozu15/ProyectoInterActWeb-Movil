var Sequelize = require('sequelize');
var Materia=require("../schemas/materia");
var Sequelize = require('sequelize');
var TomaMateria=require("../schemas/tomamaterias");

function tomamateriasProfesor(req,res){
    TomaMateria.Profesor.findAll().then(data => {
        res.status(200).send(data)
      })
}

function InsertTomaProfesro(req,res){
    var params=req.body;
    console.log(params);

    var params=req.body;
         TomaMateria.Profesor.create({
            idTOMA_MATERIAS_PROFESOR:null,
            fecha_toma: new Date,
            REGISTRO_idREGISTRO:params.idregistro,
            GESTION_idGESTION:params.idgestion,
     }).then(data => {
         res.status(200).send(data)
       });;
}

function tomaEstudiante(req,res){
    TomaMateria.Estudiante.findAll().then(data => {
        res.status(200).send(data)
      })
}

function InsertTomaEstudiante(req,res){
    var params=req.body;
    console.log(params);

    var params=req.body;
         TomaMateria.Estudiante.create({
            idTOMA_MAT:null,
            fecha_toma: new Date,
            REGISTRO_idREGISTRO:params.idregistro,
            GESTION_idGESTION:params.idgestion,
     }).then(data => {
         res.status(200).send(data)
       });;
}
module.exports={tomamateriasProfesor,InsertTomaProfesro,tomaEstudiante,InsertTomaEstudiante}