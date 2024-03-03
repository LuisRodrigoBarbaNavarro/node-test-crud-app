// Especficar motor de rutas para el recurso de usuario.
const express = require('express');
const router = express.Router();
// Especficar motor de rutas para el recurso de usuario.

// Importar controladores.
const {
    users,
    list,
    add,
    add_user,
    delete_user,
    edit,
    update_user
} = require('../controller/userController');
// Importar controladores.

// Definir rutas.
router.get('/list', list);
router.get('/add', add);
router.post('/add', add_user);
router.get('/delete/:id', delete_user);
router.get('/edit/:id', edit);
router.post('/edit/:id', update_user);
// Definir rutas.

// Exportar módulo.
module.exports = router;
// Exportar módulo.