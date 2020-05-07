// Importar Modulos
const express = require ('express');
const exphbs = require ('express-handlebars');

// Importar Routes
const configureRoutes = require('./routes');

// Crear Servidor
const app = express();

// Configurar carpeta pública
app.use(express.static('public'));

// Configurar handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    console.log('hola en la consola');
    
   res.render('product');
   });

app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});