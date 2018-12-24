/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../database/mysqlconfig');


var Horario = sequelize.define('horarios', {
	idHORARIOS: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	hora_entrada: {
		type: Sequelize.STRING(10),
		allowNull: false,
		
	},
    hora_salida: {
		type: Sequelize.STRING(10),
		allowNull: false,
		
    },
    HORARIOScol: {
		type: Sequelize.STRING(45),
		allowNull: false,
		
    }

}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	tableName: 'horarios',
	paranoid: false,
});

module.exports = Horario;