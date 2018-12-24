"use strict"
var app = require("./app");
var port = process.env.port || 2321;
var sequelize=require('./database/mysqlconfig');
sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
    app.listen(port, function() {
      console.log("servidor del api rest en puerto 2321");
  })
  })
  .catch(err => {
    console.log('No se conecto')
  })

