/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../database/mysqlconfig');
var Registro=require("./registro");
var Gestion=require("./gestion");


var Profesor = sequelize.define('toma_materias_profesor', {
	idTOMA_MATERIAS_PROFESOR: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	fecha_toma: {
		type: Sequelize.DATE,
		allowNull: false,
		
	},
    REGISTRO_idREGISTRO: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		
    },
    GESTION_idGESTION: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		
    }

}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	tableName: 'toma_materias_profesor',
	paranoid: false,
});
Registro.hasMany(Profesor, {foreignKey : 'REGISTRO_idREGISTRO'});
Gestion.hasMany(Profesor, {foreignKey : 'GESTION_idGESTION'});

var Estudiante = sequelize.define('toma_materias_estudiante', {
	idTOMA_MAT: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	fecha_toma: {
		type: Sequelize.DATE,
		allowNull: false,
		
	},
    REGISTRO_idREGISTRO: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		
    },
    GESTION_idGESTION: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		
    }

}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	tableName: 'toma_materias_estudiante',
	paranoid: false,
});
Registro.hasMany(Estudiante, {foreignKey : 'REGISTRO_idREGISTRO'});
Gestion.hasMany(Estudiante, {foreignKey : 'GESTION_idGESTION'});


module.exports = {Profesor,Estudiante};