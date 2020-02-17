const util = require('util');
const mysql = require('mysql');

const pool = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});

pool.getConnection((err, connect)=>{
    if(err)
        console.error("Something went wrong connecting to the database ... ");
    if(connect)
        connect.release();
});
pool.query = util.promisify(pool.query);
module.exports = pool;