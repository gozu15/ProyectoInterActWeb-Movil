/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../database/mysqlconfig');

var Aula = sequelize.define('aula', {
	idAULA: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	nombre_aula: {
		type: Sequelize.STRING(50),
		allowNull: false,
		
	},
    descripcion: {
		type: Sequelize.STRING(100),
		allowNull: false,
		
    }
}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	tableName: 'aula',
	paranoid: false,
});


module.exports = Aula;