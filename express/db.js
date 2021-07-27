const mariadb = require('mariadb');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});

console.log(process.env.MARIADB_HOST);

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE
});

module.exports = Object.freeze({
    pool: pool
});
