/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../database/mysqlconfig');
var Aula=require("../schemas/aula");


var Curso = sequelize.define('curso', {
	idCURSO: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	nombre_curso: {
		type: Sequelize.STRING(50),
		allowNull: false,
		
	},
    AULA_idAULA: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		
    },
    paralelo: {
		type: Sequelize.STRING(20),
		allowNull: false,
		
    }

}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	tableName: 'curso',
	paranoid: false,
});
Aula.hasMany(Curso, {foreignKey : 'AULA_idAULA'});


module.exports = Curso;