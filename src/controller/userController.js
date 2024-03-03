// Vista Users.
function users(req, res) {
    res.render('users/list');
}
// Vista Users.

// Función Users/List.
function list(req, res) {
    req.getConnection((err, conn) => {
        conn.query('call listUsers', (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('users/list', { data: rows[0] });
        });
    });
}
// Función Users/List.

// Vista Users/Add.
function add(req, res) {
    res.render('users/add');
}
// Vista Users/Add.

// Función Users/Add.
function add_user(req, res) {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('call insertUser(?, ?, ?, ?, ?)', [data.name, data.lastname, data.username, data.password, data.email], (err, rows) => {
            res.redirect('list');
        });
    });
}
// Función Users/Add.

// Función Users/Delete.
function delete_user(req, res) {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('call deleteUserByID(?)', [id], (err, rows) => {
            res.redirect('/users/list');
        });
    });
}
// Función Users/Delete.

// Vista Users/Edit.
function edit(req, res) {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('call getUserByID(?)', [id], (err, rows) => {
            res.render('users/edit', { data: rows[0][0] });
        });
    });
}
// Vista Users/Edit.

// Función Users/Edit.
function update_user(req, res) {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('call updateUserByID(?, ?, ?, ?, ?, ?)', [id, data.name, data.lastname, data.username, data.password, data.email], (err, rows) => {
            res.redirect('/users/list');
        });
    });
}
// Función Users/Edit.

// Exportar funciones.
module.exports = {
    users,
    list,
    add,
    add_user,
    delete_user,
    edit,
    update_user
};
// Exportar funciones.