// Importar Modulos
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require ('express');
const exphbs = require ('express-handlebars');

// Importar Routes
const configureRoutes = require('./routes');
//Importar path
const path = require('path');

// Crear Servidor
const app = express();

// Configurar carpeta pública
app.use(express.static('public'));

// Configurar handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'store';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  configureRoutes(app, db);

  
});

app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});