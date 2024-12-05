const mysql = require('mysql');
const data = require('./database.js');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    data.forEach((item) => {
        const sql = `INSERT INTO Products (key, picture, title, address, size, price, link) VALUES ('${item.k}', '${item.p}', '${item.t}', '${item.a}', ${item.s}, '${item.v}', '${item.l}')`;
        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log('Record inserted');
        });
    });
});