/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../database/mysqlconfig');

var Gestion = sequelize.define('gestion', {
	idGESTION: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	number_year: {
		type: Sequelize.DATE,
		allowNull: false,
		
	},
    nro_gestion: {
		type: Sequelize.CHAR(2),
		allowNull: false,
		
    }
}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	tableName: 'gestion',
	paranoid: false,
});


module.exports = Gestion;