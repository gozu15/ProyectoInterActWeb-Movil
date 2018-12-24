/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../database/mysqlconfig');
var Usuario = require('./usuario');

var Registro = sequelize.define('registro', {
	idREGISTRO: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	fecha_registro: {
		type: Sequelize.STRING(50),
		allowNull: false,
		unique: true,
	},
    categoria_estudio: {
		type: Sequelize.STRING(50),
		allowNull: false,
		unique: true,
    },
    turno_estudio: {
		type: Sequelize.STRING(20),
		allowNull: false,
		
    },
    descripcion:{
        type: Sequelize.DATE,
		allowNull: false,
    },
    USUARIO_idUSUARIO: {
		type: Sequelize.INTEGER(11),
		allowNull: false,
		
    }

}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	tableName: 'registro',
	paranoid: false,
});
Usuario.hasMany(Registro, {foreignKey : 'USUARIO_idUSUARIO'});


module.exports =    Registro;