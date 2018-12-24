/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../database/mysqlconfig');

var Usuario = sequelize.define('usuario', {
	idUSUARIO: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	nombre: {
		type: Sequelize.STRING(50),
		allowNull: false,
		unique: true,
	},
    apellidos_usuario: {
		type: Sequelize.STRING(50),
		allowNull: false,
		unique: true,
    },
    genero: {
		type: Sequelize.STRING(20),
		allowNull: false,
		
    },
    fecha_nacimiento:{
        type: Sequelize.DATE,
		allowNull: false,
    },
    tipo_usuario: {
		type: Sequelize.STRING(45),
		allowNull: false,
		
    },
    nombre_usuario: {
		type: Sequelize.STRING(50),
		allowNull: false,
		
    },
    password: {
		type: Sequelize.STRING(50),
		allowNull: false,
		
    },

}, {
	underscored: true,
	timestamps: false,
	createAt: false,
	tableName: 'usuario',
	paranoid: false,
});


module.exports = Usuario;