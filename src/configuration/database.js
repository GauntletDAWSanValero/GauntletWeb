const knex = require("knex");

// Configuración de la base de datos: tipo, ubicación y otros parámetros
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'gauntlet.db'
    },
    useNullAsDefault: true,
    pool: {
        afterCreate: (conn, done) => {
            conn.run('PRAGMA foreign_keys = ON', done);
        },
    },
});

module.exports = db;