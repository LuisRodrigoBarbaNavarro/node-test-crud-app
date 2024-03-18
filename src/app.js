// Importar módulos.
const express = require('express');
const { engine } = require('express-handlebars');
const Handlebars = require('handlebars');
const conexion = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const userRoutes = require('./routes/userRoutes');
// Importar módulos.

// Importar rutas.
const app = express();
app.set('port', 3000);
// Importar rutas.

// Configurar el middleware de procesamiento de cuerpo.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Configurar el middleware de procesamiento de cuerpo.

// Indicar directorio de vistas y motor de plantillas.
app.set('views', __dirname + '/views');
    app.engine('.hbs', engine({
         extname: '.hbs', }));
    app.set('view engine', 'hbs');
// Indicar directorio de vistas y motor de plantillas.

// Configurar conexión a la base de datos.
app.use(conexion(mysql, {
    host: 'mysql-container', // Nombre del contenedor MySQL
    user: 'root',
    password: 'root', // Contraseña del usuario root de MySQL
    port: 3306, // Puerto por defecto de MySQL
    database: 'test' // Nombre de la base de datos
}, 'single'));
// Configurar conexión a la base de datos.

// Indicar por qué puerto escuchará el servidor.
app.listen(app.get('port'), () => {
    console.log('Escuchando en puerto... ', app.get('port'));
});
// Indicar por qué puerto escuchará el servidor.

// Ruta principal.
app.get('/', (req, res) => {
    res.render('home');
});
// Ruta principal.

// Ruta de usuarios.
app.use('/users', userRoutes);
// Ruta de usuarios.
