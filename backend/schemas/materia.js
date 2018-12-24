/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../database/mysqlconfig');


var Materia = sequelize.define('materia', {
	idMATERIA: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	nombre_materia: {
		type: Sequelize.STRING(45),
		allowNull: false,
		
	},
    descripcion: {
		type: Sequelize.STRING(45),
		allowNull: false,
		
    },
    otros: {
		type: Sequelize.STRING(45),
		allowNull: false,
		
    }

}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	tableName: 'materia',
	paranoid: false,
});

module.exports = Materia;